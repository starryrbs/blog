---
title: "typescript分享"
date: "2019-06-10"
permalink: "2019-09-18-typescript-sharing"
---

### 1. typescript 简介

> TypeScript 是微软开发的一门编程语言，是 JavaScript 的一个超集，它可以编译成纯 JavaScript。
> TypeScript 可以在任何浏览器、任何计算机和任何操作系统上运行，并且是开源的。

<img src="http://ww1.sinaimg.cn/large/006hwvVnly1g741aj93jjj31h60jotf5.jpg"/>

#### 为什么要使用 TypeScript？

- 你调用一个别人写的函数，很不幸，这个家伙没有留下任何注释，为了搞清楚参数类型，你有可能是硬着头皮去看里面的逻辑，也有可能是找到写这个函数的人在哪里调用过这个函数，然后 console 出参数。

- 为了保证代码的健壮性，你很有责任心，对一个函数的输入参数进行各种假设，最终给老板盛上了一碗香喷喷的意大利面。

- 领导看好你，让你维护一个重要的底层类库，你殚精竭虑，优化了一个参数类型，但不知道有多少处引用，在提交代码前，是否感到脊背发凉？

<img src="http://ww1.sinaimg.cn/large/006hwvVnly1g740x2stmtg301d01dq2p.gif" style="width:200px;height:200px;transform: translateX(-50%);margin-left: 50%;"/>

- 明明定义好了接口，可是一联调就报错了–“TypeError: Cannot read property ‘length’ of undefined”,于是你怒气冲冲地去找后端理论：“嘿，哥们儿！这个字段是数组！这个字段是数组！这个字段是数组！

<img src="http://ww1.sinaimg.cn/large/006hwvVnly1g741np3pj0j306o06o74n.jpg" style="width:200px;height:200px;transform: translateX(-50%);margin-left: 50%;"/>

#### 小结

- 以上情况归根结底，是因为 JavaScript 是一门动态弱类型语言，对变量的类型非常宽容，而且不会在这些变量和它们的调用者之间建立结构化的契约。如果你长期在没有类型约束的环境下开发，就会造成“类型思维”的缺失，养成不良的编程习惯，这也是做前端开发的短板之一，值得我们警醒。

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
