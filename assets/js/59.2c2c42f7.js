(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{261:function(s,e,n){"use strict";n.r(e);var a=n(2),t=Object(a.a)({},function(){var s=this,e=s.$createElement,n=s._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"vue2-x-配置-typescript"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vue2-x-配置-typescript","aria-hidden":"true"}},[s._v("#")]),s._v(" Vue2.x 配置 TypeScript")]),s._v(" "),n("ol",[n("li",[n("p",[s._v("安装依赖")]),s._v(" "),n("blockquote",[n("p",[s._v("安装 vue 的官方插件")])]),s._v(" "),n("pre",[n("code",[s._v("cnpm i vue-class-component vue-property-decorator -S\n")])]),s._v(" "),n("blockquote",[n("p",[s._v("安装 TypeScript")])]),s._v(" "),n("pre",[n("code",[s._v("cnpm i typescript -D\n")])]),s._v(" "),n("blockquote",[n("p",[s._v("安装 ts-loader")])]),s._v(" "),n("pre",[n("code",[s._v("cnpm i ts-loader -D\n")])]),s._v(" "),n("p",[n("b",[s._v("请注意：ts-loader 请与你的 webpack 版本对应，我的 webpack 版本为 3.6.0，因此我应该安装的 ts-loader 版本为 3.x.x，因此我在 ts-loader 的 Github 上找到了我最新的 3.x.x 的版本为 3.5.0，所以我的安装命令为 npm i ts-loader@3.5.0 -D")])])]),s._v(" "),n("li",[n("p",[s._v("配置 webpack.base.conf.js")]),s._v(" "),n("blockquote",[n("p",[s._v("配置./build/webpack.base.conf.js")])]),s._v(" "),n("ul",[n("li",[n("p",[s._v("找到 entry.app 将 main.js 改成 main.ts；并且把项目文件中的 main.js 也改成 main.ts , 里面内容保持不变")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("entry: {\n        app: './src/main.ts'\n    }\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])])]),s._v(" "),n("li",[n("p",[s._v("找到 resolve.extensions，里面加上.ts 后缀 （是为了之后引入.ts 的时候不写后缀）")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("extensions: ['.js', '.vue', '.json', '.ts'], //加入.ts\nalias: {\n    vue$: 'vue/dist/vue.esm.js',\n    '@': resolve('src')\n    }\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])])]),s._v(" "),n("li",[n("p",[s._v("找到 module.rules 添加 webpack 对.ts 的解析")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("    rules: [\n        // 从这里复制下面的代码就可以了\n        {\n            test: /\\.tsx?$/,\n            loader: 'ts-loader',\n            exclude: /node_modules/,\n            options: {\n                appendTsSuffixTo: [/\\.vue$/]\n            }\n        }\n    ]\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])])])])]),s._v(" "),n("li",[n("p",[s._v("添加 tsconfig.json")]),s._v(" "),n("p",[s._v("在根路径下创建 tsconfig.json 文件，添加一下配置：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('{\n    "include": ["src/**/*"],\n    "exclude": ["node_modules"],\n    "compilerOptions": {\n        "allowSyntheticDefaultImports": true,\n        "experimentalDecorators": true,\n        "allowJs": true,\n        "module": "esnext",\n        "target": "es5",\n        "moduleResolution": "node",\n        "isolatedModules": true,\n        "lib": ["dom", "es5", "es6", "es7", "es2015.promise"],\n        "sourceMap": true,\n        "pretty": true\n    }\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br")])])]),s._v(" "),n("li",[n("p",[s._v("让 ts 识别 .vue")]),s._v(" "),n("p",[s._v("由于 TypeScript 默认并不支持 *.vue 后缀的文件，所以在 vue 项目中引入的时候需要创建一个 vue-shim.d.ts 文件，放在项目对应使用目录下，所以新建 src/vue-shim.d.ts，写入以下代码：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("declare module '*.vue' {\n    import Vue from 'vue'\n    export default Vue\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])])]),s._v(" "),n("li",[n("p",[s._v(".js 文件重命名为.ts 文件（可选）")]),s._v(" "),n("p",[s._v("将 src 下的所有**.js 文件重命名**.ts，包括 src/router/index.js 等逐一从.js 重命名为.ts")]),s._v(" "),n("blockquote",[n("p",[s._v("注意：重命名后对 vue 文件的 import，需添加.vue 后缀")])]),s._v(" "),n("p",[s._v("之前：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("import App from './App'\nimport HelloWorld from '@/components/HelloWorld'\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("需改为：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("import App from './App.vue'\nimport HelloWorld from '@/components/HelloWorld.vue'\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])])]),s._v(" "),n("li",[n("p",[s._v("改造 .vue 文件(重点)")]),s._v(" "),n("ul",[n("li",[s._v('<script>标签添加 lang="ts"声明')]),s._v(" "),n("li",[s._v("使用 vue-class-component 对 Vue 组件进行封装")])]),s._v(" "),n("p",[s._v("之前：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("<template>\n            <div id=\"app\">\n        <router-view />\n        </div>\n        </template>\n        <script>\n            export default { name: 'App' }\n        <\/script>\n        <style>\n            @import './style/app.scss';\n        </style>\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("p",[s._v("改造后：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("    <template>\n        <div id=\"app\">\n            <router-view />\n        </div>\n    </template>\n\n    <script lang=\"ts\">\n        import Vue from 'vue'\n        import Component from 'vue-class-component'\n\n        @Component\n        export default class App extends Vue {}\n    <\/script>\n    <style>\n        @import './style/app.scss';\n    </style>\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br")])])]),s._v(" "),n("li",[n("p",[s._v("让 vue 识别全局方法/变量")]),s._v(" "),n("p",[s._v("因为在项目中，会存在自己写的一些方法是放在 vue.prototype 上的。")]),s._v(" "),n("p",[s._v("请在 main.ts 里面加上这段： 请放在 new Vue 上面")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("Vue.config.productionTip = false\n// 全局方法 this. 的调用方式\ndeclare module 'vue/types/vue' {\n   interface Vue {\n       $tool: any\n       $api: any\n   }\n}\n/* eslint-disable no-new */\nnew Vue({\n   el: '#app',\n   store,\n   router,\n   components: { App },\n   template: '<App/>'\n})\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br")])])])])])},[],!1,null,null,null);e.default=t.exports}}]);