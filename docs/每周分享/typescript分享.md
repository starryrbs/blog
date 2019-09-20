---
title: "typescript分享"
date: "2019-06-10"
permalink: "2019-09-18-typescript-sharing"
---

### 1. typescript 简介

> TypeScript 是微软开发的一门编程语言，是 JavaScript 的一个超集，它可以编译成纯 JavaScript。
> TypeScript 可以在任何浏览器、任何计算机和任何操作系统上运行，并且是开源的。

<img style="margin-top:20px;" src="http://ww1.sinaimg.cn/large/006hwvVnly1g741aj93jjj31h60jotf5.jpg"/>

#### TypeScript 使用趋势图(来源谷歌趋势)

<img style="margin-top:50px;" src="http://ww1.sinaimg.cn/large/006hwvVnly1g757dulddhj31a30ge74x.jpg"/>

#### 为什么要使用 TypeScript？

> javascript 方法声明示例

```javascript
function doSomething(a) {
  //  code
}
```

> typescript 方法声明示例

```typescript
function student(x: string, y: number): string {
  return `我是${x},今年${y}岁`;
}

console.log(student("wzy", 22)); // 我是wzy,今年22岁
```

- 你调用一个别人写的函数，很不幸，这个家伙没有留下任何注释，为了搞清楚参数类型，你有可能是硬着头皮去看里面的逻辑，也有可能是找到写这个函数的人在哪里调用过这个函数，然后 console 出参数。

<img src="http://ww1.sinaimg.cn/large/006hwvVnly1g757l806lfj306o06oaal.jpg" style="width:200px;height:200px;transform: translateX(-50%);margin-left: 50%;"/>

- 为了保证代码的健壮性，你很有责任心，对一个函数的输入参数进行各种假设，最终给 leader 盛上了一碗香喷喷的意大利面。

<img src="http://ww1.sinaimg.cn/large/006hwvVnly1g757mc4cgfg308c08c0t9.gif"  style="width:200px;height:200px;transform: translateX(-50%);margin-left: 50%;"/>

- leader 看好你，让你维护一个重要的底层类库，你殚精竭虑，优化了一个参数类型，但不知道有多少处引用，在提交代码前，是否感到脊背发凉？

<img src="http://ww1.sinaimg.cn/large/006hwvVnly1g740x2stmtg301d01dq2p.gif" style="width:200px;height:200px;transform: translateX(-50%);margin-left: 50%;"/>

- 明明定义好了接口，可是一联调就报错了–“TypeError: Cannot read property ‘length’ of undefined”,于是你怒气冲冲地去找后端理论：“嘿，哥们儿！这个字段是数组！这个字段是数组！这个字段是数组！

<img src="http://ww1.sinaimg.cn/large/006hwvVnly1g741np3pj0j306o06o74n.jpg" style="width:200px;height:200px;transform: translateX(-50%);margin-left: 50%;"/>

#### 小结

- 以上情况归根结底，是因为 JavaScript 是一门**动态弱类型**语言，对变量的类型非常宽容，而且不会在这些变量和它们的调用者之间建立结构化的契约。如果你长期在没有类型约束的环境下开发，就会造成“类型思维”的缺失，养成不良的编程习惯，这也是做前端开发的短板之一，值得我们警醒。

- 幸运的是，TypeScript 的出现很好的弥补了 JavaScript 在静态类型检查方面的缺陷。它为 JavaScript 提供了良好的类型检查支持，而且能够编译成标准的 JavaScript。

- 在可预见的未来，TypeScript 将称为前端开发者必须掌握的开发语言之一。

#### TypeScript 优势

> 类型检查

TypeScript 会在编译代码时进行严格的静态类型检查，这意味着你可以在编码阶段发现可能存在的隐患，而不必把它们带到线上。

> 语言拓展

TypeScript 会包括来自 ES6 和未来提案中的特性，比如异步操作和装饰器；也会从其他语言借鉴某些特性，比如接口和抽象类

> 工具属性

TypeScript 能够编译成标准的 JavaScript，可以在任何浏览器、操作系统上运行，无需任何运行时的额外开销。从这个角度上讲，TypeScript 更像是一个工具，而不是一门独立的语言

### 2. TypeScript 使用

教大家如何 5 分钟上手 TypeScript

> 安装 TypeScript

    npm install -g typescript

> 构建第一个 TypeScript 文件

新建 greeter.ts 文件

```typescript
function greeter(person) {
  return "Hello, " + person;
}
let user = "Jane User";
document.body.innerHTML = greeter(user);
```

> 编译代码

<img src="http://ww1.sinaimg.cn/thumbnail/006hwvVnly1g740jbpjcuj300l00k0dv.jpg" style="top:6px;position:relative" />在命令行上，运行 TypeScript 编译器：

```
tsc greeter.ts
```

输出结果为一个 greeter.js 文件，它包含了和输入文件中相同的 JavsScript 代码。 一切准备就绪，我们可以运行这个使用 TypeScript 写的 JavaScript 应用了！

#### 接下来让我们看看 TypeScript 工具带来的常用功能。

> 给 person 函数的参数添加: string 类型注解，如下：

1. TypeScript 里的类型注解是一种轻量级的为函数或变量添加约束的方式。 在这个例子里，我们希望 greeter 函数接收一个字符串参数。 然后尝试把 greeter 的调用改成传入一个数组：

```typescript
function greeter(person: string) {
  return "Hello, " + person;
}

let user = [0, 1, 2];

document.body.innerHTML = greeter(user);
```

2. 重新编译，你会看到产生了一个错误。

```
greeter.ts(7,26): error TS2345: Argument of type 'number[]' is not assignable to parameter of type 'string'.
```

类似地，尝试删除 greeter 调用的所有参数。 TypeScript 会告诉你使用了非期望个数的参数调用了这个函数。 在这两种情况中，TypeScript 提供了静态的代码分析，它可以分析代码结构和提供的类型注解。

要注意的是尽管有错误，greeter.js 文件还是被创建了。 就算你的代码里有错误，你仍然可以使用 TypeScript。但在这种情况下，TypeScript 会警告你代码可能不会按预期执行。

> 注意:

- 类似地，尝试删除 greeter 调用的所有参数。 TypeScript 会告诉你使用了非期望个数的参数调用了这个函数。 在这两种情况中，TypeScript 提供了静态的代码分析，它可以分析代码结构和提供的类型注解。

- 要注意的是尽管有错误，greeter.js 文件还是被创建了。 就算你的代码里有错误，你仍然可以使用 TypeScript。但在这种情况下，TypeScript 会警告你代码可能不会按预期执行。

#### 接口

让我们开发这个示例应用。这里我们使用接口来描述一个拥有 firstName 和 lastName 字段的对象。 在 TypeScript 里，只在两个类型内部的结构兼容那么这两个类型就是兼容的。 这就允许我们在实现接口时候只要保证包含了接口要求的结构就可以，而不必明确地使用 implements 语句。

```typescript
interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

let user = { firstName: "Jane", lastName: "User" };

document.body.innerHTML = greeter(user);
```

#### 类

最后，让我们使用类来改写这个例子。 TypeScript 支持 JavaScript 的新特性，比如支持基于类的面向对象编程。

让我们创建一个 Student 类，它带有一个构造函数和一些公共字段。 注意类和接口可以一起共作，程序员可以自行决定抽象的级别。

还要注意的是，在构造函数的参数上使用 public 等同于创建了同名的成员变量。

```typescript
class Student {
  fullName: string;
  constructor(public firstName, public middleInitial, public lastName) {
    this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}

interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Jane", "M.", "User");

document.body.innerHTML = greeter(user);
```

重新运行 tsc greeter.ts，你会看到生成的 JavaScript 代码和原先的一样。 TypeScript 里的类只是 JavaScript 里常用的基于原型面向对象编程的简写。

### 3. Vue.js 中使用 TypeScript

> Vue 引入 TypeScript

- 首先 Cli 之后，接下来需要安装一些必要/以后需要的插件

<img src="http://ww1.sinaimg.cn/large/006hwvVnly1g755q7rjuqj30ht03t3yf.jpg"/>

这些库大体的作用，可以按需引入：

<img src="http://ww1.sinaimg.cn/large/006hwvVnly1g755teioa5j30nl07n74t.jpg"/>

<h1 style="margin-bottom:50px">此处省略 n 多配置。。。</h1>

<b>详细地址请移步==></b> <a href="https://www.jianshu.com/p/55a23872b39b" target="_blank">Vue2.X 强上 TypeScript</a>

> 简单使用

```vue
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class App extends Vue {
  msg = 123;
  mounted() {
    console.log("ads");
    const a = "dsa";
    console.log(a);
  }
  static getData() {
    console.log("112121");
  }
}
</script>
```

> 熟悉几个 vue 的装饰器 vue-property-decorator

Decorator 可以非侵入的装饰类、方法、属性，解耦业务逻辑和辅助功能逻辑。以下是主要的三方 Decorator 组件，
有了这些组件常用的 Vue 特性就可以全部转成 Decorator 风格了。

```javascript
import {
  Vue,
  Component,
  Inject,
  Provide,
  Prop,
  Model,
  Watch,
  Emit,
  Mixins
} from "vue-property-decorator";
```

1. Vue 实际上就是 Vue 本身,继承 vue 相关属性和函数

```typescript
class MyComponent extends Vue {}
```

2. @Component 声明成一个 vue 的组件实例，如果不使用，则不能得到一个 vue 组件

> 第一种方式，不需要定义额外内容

```vue
@Component class MyComponent extends Vue { }
```

> 第二种方式，定义相关内容

```vue
@Component({ /* 这里和js版本编写的 vue 组件内容相同， *
凡是不能在ts里面完成的都可以在这里完成 * 最终会被合并到一个实例中。 *
在这里定义的内容，不会被语法器获取到，因此必须要同步在class中声明 */ data(){
return { myname:"",age:18 } } } ) class MyComponent extends Vue { private
myname:string; mounted(){ this.myname; this.age;//
语法器报错，当前类找不到age属性 } }
```

3. @Provide 向任意层级的子组件提供可访问的属性，默认为当前属性的名称，可以指定名称

```typescript
@Component
class ParentComponent extends Vue {
  @Provide() private info!: string;
  @Provide("next") private infoNext!: string;
}
```

4. @Inject 获取父级由 Provide 提供的属性，默认为当前属性的名称，可以指定名称，多个父级提供相同名称属性时，获取最近父级的名称属性。

```typescript
@Component
class MyComponent extends Vue {
  @Inject() private info!: string;
  @Inject("next") private infoNext!: string;
}
```

5. @Prop 由标签属性注入，获取对应标签属性上值,可配置具体 prop 内容，参照 js 版本 props 内容

```typescript
@Component
class MyComponent extends Vue {
  @Prop() age!: number;
  @Prop({ default: 1 }) sex!: number;
}
```

```vue
<template>
  <MyComponent :age="16" />
</template>

<script lang="ts">
import MyComponent from "./MyComponent.vue";

@Component({
  components: { MyComponent }
})
class PComponent extends Vue {}
</script>
```

<b>详细地址请移步==></b> <a href="https://juejin.im/post/5c662a7de51d4562e71c4277" target="_blank">如何使用 vue + typescript 编写页面</a>

### 4. 怎么样学好 TypeScript？

<img style="margin-top:50px;" src="http://ww1.sinaimg.cn/large/006hwvVnly1g7571y5yd7j30ng0uiqd9.jpg"/>

> 参考

<a href="https://juejin.im/post/5c67d9b66fb9a049b41d0119"  target="_blank">Vue 框架 TypeScript 装饰器使用指南</a>

<a href="https://www.jianshu.com/p/55a23872b39b"  target="_blank">Vue2.X 强上 TypeScript</a>

<a href="https://juejin.im/post/5c662a7de51d4562e71c4277"  target="_blank">如何使用 vue + typescript 编写页面 ( 基础装饰器部分 )</a>

<a href="https://www.tslang.cn/index.html"  target="_blank">typescript 官网</a>
