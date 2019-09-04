---
title: "Vue2.x配置TypeScript"
date: "2019-09-04"
permalink: "2019-09-04-typescript-vue"
---

## Vue2.x 配置 TypeScript

1.  安装依赖

    > 安装 vue 的官方插件

        cnpm i vue-class-component vue-property-decorator -S

    > 安装 TypeScript


    	cnpm i typescript -D

    > 安装ts-loader

    	cnpm i ts-loader -D


    <b>请注意：ts-loader 请与你的 webpack 版本对应，我的 webpack 版本为 3.6.0，因此我应该安装的 ts-loader 版本为 3.x.x，因此我在ts-loader的Github上找到了我最新的 3.x.x 的版本为 3.5.0，所以我的安装命令为npm i ts-loader@3.5.0 -D</b>

2.  配置 webpack.base.conf.js

    > 配置./build/webpack.base.conf.js

    - 找到 entry.app 将 main.js 改成 main.ts；并且把项目文件中的 main.js 也改成 main.ts , 里面内容保持不变

          		entry: {
          		        app: './src/main.ts'
          		    }

    - 找到 resolve.extensions，里面加上.ts 后缀 （是为了之后引入.ts 的时候不写后缀）


    		resolve: {
    		        extensions: ['.js', '.vue', '.json', '.ts'], //加入.ts
    		        alias: {
    		            vue$: 'vue/dist/vue.esm.js',
    		            '@': resolve('src')
    		        }
    		    }

    - 找到module.rules 添加webpack对.ts的解析


    		module: {
    		        rules: [
    		            // 从这里复制下面的代码就可以了
    		            {
    		                test: /\.tsx?$/,
    		                loader: 'ts-loader',
    		                exclude: /node_modules/,
    		                options: {
    		                    appendTsSuffixTo: [/\.vue$/]
    		                }
    		            }
    		        ]
    		    }

3.  添加 tsconfig.json

    在根路径下创建 tsconfig.json 文件，添加一下配置：

        {
            "include": ["src/**/*"],
            "exclude": ["node_modules"],
            "compilerOptions": {
                "allowSyntheticDefaultImports": true,
                "experimentalDecorators": true,
                "allowJs": true,
                "module": "esnext",
                "target": "es5",
                "moduleResolution": "node",
                "isolatedModules": true,
                "lib": ["dom", "es5", "es6", "es7", "es2015.promise"],
                "sourceMap": true,
                "pretty": true
            }
        }

4.  让 ts 识别 .vue

    由于 TypeScript 默认并不支持 \*.vue 后缀的文件，所以在 vue 项目中引入的时候需要创建一个 vue-shim.d.ts 文件，放在项目对应使用目录下，所以新建 src/vue-shim.d.ts，写入以下代码：

        declare module '*.vue' {
            import Vue from 'vue'
            export default Vue
        }

5.  .js 文件重命名为.ts 文件（可选）

    将 src 下的所有\*\*.js 文件重命名\*\*.ts，包括 src/router/index.js 等逐一从.js 重命名为.ts

    > 注意：重命名后对 vue 文件的 import，需添加.vue 后缀


    之前：

    	import App from './App'
    	import HelloWorld from '@/components/HelloWorld'

    需改为：

    	import App from './App.vue'
    	import HelloWorld from '@/components/HelloWorld.vue'

6.  改造 .vue 文件(重点)

    - \<script>标签添加 lang="ts"声明
    - 使用 vue-class-component 对 Vue 组件进行封装

    之前：
    <template>

    <div id="app">
    <router-view />
    </div>
    </template>
    <script>
    export default { name: 'App' }
    </script>
    <style>
    @import './style/app.scss';
    </style>

    改造后：

        <template>
            <div id="app">
                <router-view />
            </div>
        </template>

        <script lang="ts">
            import Vue from 'vue'
            import Component from 'vue-class-component'

            @Component
            export default class App extends Vue {}
        </script>
        <style>
            @import './style/app.scss';
        </style>

7.  让 vue 识别全局方法/变量

    因为在项目中，会存在自己写的一些方法是放在 vue.prototype 上的。

    请在 main.ts 里面加上这段： 请放在 new Vue 上面

        Vue.config.productionTip = false
        // 全局方法 this. 的调用方式
        declare module 'vue/types/vue' {
           interface Vue {
               $tool: any
               $api: any
           }
        }
        /* eslint-disable no-new */
        new Vue({
           el: '#app',
           store,
           router,
           components: { App },
           template: '<App/>'
        })
