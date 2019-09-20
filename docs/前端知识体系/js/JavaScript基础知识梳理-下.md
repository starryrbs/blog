---
title: "JavaScript基础知识梳理(下)"
date: "2019-03-27"
permalink: "2019-03-27-javascript-second"
---

👇 内容速览 👇

- 实现 ES5 继承的 4 种方法
- 原型和原型链
- 作用域和作用域链
- Event Loop
- 执行上下文
- 闭包的理解和分析

### ES5 继承

> 题目：ES5 中常用继承方法。

**方法一：绑定构造函数**

缺点：不能继承父类原型方法/属性

```javascript
function Animal() {
  this.species = "动物";
}

function Cat() {
  // 执行父类的构造方法, 上下文为实例对象
  Animal.apply(this, arguments);
}

/**
 * 测试代码
 */
var cat = new Cat();
console.log(cat.species); // output: 动物
```

**方法二：原型链继承**

缺点：无法向父类构造函数中传递参数；子类原型链上定义的方法有先后顺序问题。

**注意**：js 中交换原型链，均需要修复`prototype.constructor`指向问题。

```javascript
function Animal(species) {
  this.species = species;
}
Animal.prototype.func = function() {
  console.log("Animal");
};

function Cat() {}
/**
 * func方法是无效的, 因为后面原型链被重新指向了Animal实例
 */
Cat.prototype.func = function() {
  console.log("Cat");
};

Cat.prototype = new Animal();
Cat.prototype.constructor = Cat; // 修复: 将Cat.prototype.constructor重新指向本身

/**
 * 测试代码
 */
var cat = new Cat();
cat.func(); // output: Animal
console.log(cat.species); // undefined
```

**方法 3:组合继承**

结合绑定构造函数和原型链继承 2 种方式，缺点是：调用了 2 次父类的构造函数。

```javascript
function Animal(species) {
  this.species = species;
}
Animal.prototype.func = function() {
  console.log("Animal");
};

function Cat() {
  Animal.apply(this, arguments);
}

Cat.prototype = new Animal();
Cat.prototype.constructor = Cat;

/**
 * 测试代码
 */
var cat = new Cat("cat");
cat.func(); // output: Animal
console.log(cat.species); // output: cat
```

**方法 4:寄生组合继承**

改进了组合继承的缺点，只需要调用 1 次父类的构造函数。**它是引用类型最理想的继承范式**。（引自：《JavaScript 高级程序设计》）

```javascript
/**
 * 寄生组合继承的核心代码
 * @param {Function} sub 子类
 * @param {Function} parent 父类
 */
function inheritPrototype(sub, parent) {
  // 拿到父类的原型
  var prototype = Object.create(parent.prototype);
  // 改变constructor指向
  prototype.constructor = sub;
  // 父类原型赋给子类
  sub.prototype = prototype;
}

function Animal(species) {
  this.species = species;
}
Animal.prototype.func = function() {
  console.log("Animal");
};

function Cat() {
  Animal.apply(this, arguments); // 只调用了1次构造函数
}

inheritPrototype(Cat, Animal);

/**
 * 测试代码
 */

var cat = new Cat("cat");
cat.func(); // output: Animal
console.log(cat.species); // output: cat
```

### 原型和原型链

- 所有的引用类型（数组、对象、函数），都有一个`__proto__`属性，~~属性值是一个普通的对象~~
- 所有的函数，都有一个 prototype 属性，属性值也是一个普通的对象
- 所有的引用类型（数组、对象、函数），`__proto__`属性值指向它的构造函数的 prototype 属性值

**注**：ES6 的箭头函数没有`prototype`属性，但是有`__proto__`属性。

```javascript
const obj = {};
// 引用类型的 __proto__ 属性值指向它的构造函数的 prototype 属性值
console.log(obj.__proto__ === Object.prototype); // output: true
```

#### 原型

> 题目：如何理解 JS 中的原型？

```javascript
// 构造函数
function Foo(name, age) {
  this.name = name;
}
Foo.prototype.alertName = function() {
  alert(this.name);
};
// 创建示例
var f = new Foo("zhangsan");
f.printName = function() {
  console.log(this.name);
};
// 测试
f.printName();
f.alertName();
```

但是执行`alertName`时发生了什么？这里再记住一个重点 **当试图得到一个对象的某个属性时，如果这个对象本身没有这个属性，那么会去它的`__proto__`（即它的构造函数的`prototype`）中寻找**，因此`f.alertName`就会找到`Foo.prototype.alertName`。

#### 原型链

> 题目：如何 JS 中的原型链？

以上一题为基础，如果调用`f.toString()`。

1. `f`试图从`__proto__`中寻找（即`Foo.prototype`），还是没找到`toString()`方法。
1. 继续向上找，从`f.__proto__.__proto__`中寻找（即`Foo.prototype.__proto__`中）。**因为`Foo.prototype`就是一个普通对象，因此`Foo.prototype.__proto__ = Object.prototype`**
1. 最终对应到了`Object.prototype.toString`

这是对深度遍历的过程，寻找的依据就是一个链式结构，所以叫做“原型链”。

### 作用域和作用域链

> 题目：如何理解 JS 的作用域和作用域链。

**① 作用域**

ES5 有”全局作用域“和”函数作用域“。ES6 的`let`和`const`使得 JS 用了”块级作用域“。

为了解决 ES5 的全局冲突，一般都是闭包编写：`(function(){ ... })()`。将变量封装到函数作用域。

**② 作用域链**

当前作用域没有找到定义，继续向父级作用域寻找，直至全局作用域。**这种层级关系，就是作用域链**。

### Event Loop

#### 单线程

> 题目：讲解下面代码的执行过程和结果。

```javascript
var a = true;
setTimeout(function() {
  a = false;
}, 100);
while (a) {
  console.log("while执行了");
}
```

这段代码会一直执行并且输出"while..."。**JS 是单线程的，先跑执行栈里的同步任务，然后再跑任务队列的异步任务**。

#### 执行栈和任务队列

> 题目：说一下 JS 的 Event Loop。

简单总结如下：

1. JS 是单线程的，其上面的所有任务都是在两个地方执行：**执行栈和任务队列**。前者是存放同步任务；后者是异步任务有结果后，就在其中放入一个事件。
1. 当执行栈的任务都执行完了（栈空），js 会读取任务队列，并将可以执行的任务从任务队列丢到执行栈中执行。
1. 这个过程是循环进行，所以称作`Loop`。

### 执行上下文

> 题目：解释下“全局执行上下文“和“函数执行上下文”。

①**全局执行上下文**

解析 JS 时候，创建一个 **全局执行上下文** 环境。把代码中即将执行的（**内部函数的不算，因为你不知道函数何时执行**）变量、函数声明都拿出来。**未赋值的变量就是`undefined`**。

下面这段代码输出：`undefined`；而不是抛出`Error`。因为在解析 JS 的时候，变量 a 已经存入了全局执行上下文中了。

```javascript
console.log(a);
var a = 1;
```

②**函数执行上下文**

和全局执行上下文差不多，但是多了`this`和`arguments`和参数。

在 JS 中，`this`是关键字，它作为内置变量，**其值是在执行的时候确定（不是定义的时候确定）**。

### 闭包的理解和分析

> 题目：解释下 js 的闭包

直接上[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Closures)的解释：闭包是**函数**和**声明该函数的词法环境**的组合。

而在 JavaScript 中，函数是被作为一级对象使用的，它既可以本当作值返回，还可以当作参数传递。理解了：“**Js 中的函数运行在它们被定义的作用域，而不是它们被执行的作用域**”（摘自《JavaScript 语言精粹》） 这句话即可。

> 题目：闭包优缺点

闭包封住了变量作用域，有效地防止了全局污染；但同时，它也存在**内存泄漏**的风险：

- 在浏览器端可以通过强制刷新解决，对用户体验影响不大
- 在服务端，由于 node 的内存限制和累积效应，可能会造成进程退出甚至服务器沓机

解决方法是显式对外暴露一个接口，专门用以清理变量：

```javascript
function mockData() {
  const mem = {};

  return {
    clear: () => (mem = null), // 显式暴露清理接口

    get: page => {
      if (page in mem) {
        return mem[page];
      }
      mem[page] = Math.random();
    }
  };
}
```

### call、apply、bind 使用和区别

1. apply 的用法和使用场景(<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply">详细解释</a>)

   apply() 方法调用一个具有给定 this 值的函数，以及作为一个数组（或类似数组对象）提供的参数。

   > 注意：call()方法的作用和 apply() 方法类似，区别就是 call()方法接受的是参数列表，而 apply()方法接受的是一个参数数组。

   #### 语法

   ```ecmascript 6
   func.apply(thisArg, [argsArray])
   ```

   #### 参数

   > thisArg

   可选的。在 func 函数运行时使用的 this 值。请注意，this 可能不是该方法看到的实际值：如果这个函数处于非严格模式下，则指定为 null 或 undefined 时会自动替换为指向全局对象，原始值会被包装。

   > argsArray

   可选的。一个数组或者类数组对象，其中的数组元素将作为单独的参数传给 func 函数。如果该参数的值为 null 或 undefined，则表示不需要传入任何参数。从 ECMAScript 5 开始可以使用类数组对象。 浏览器兼容性 请参阅本文底部内容。

   #### 返回值

   调用有指定 this 值和参数的函数的结果。

   #### 使用示例

   - 用 apply 将数组添加到另一个数组

     ```ecmascript 6
     var array = ['a', 'b'];
     var elements = [0, 1, 2];
     array.push.apply(array, elements);//基本等同于array.push(...elements)
     console.info(array); // ["a", "b", 0, 1, 2]
     ```

   - 使用 apply 和内置函数

     ```ecmascript 6
     /* 找出数组中最大/小的数字 */
     var numbers = [5, 6, 2, 3, 7];

     /* 应用(apply) Math.min/Math.max 内置函数完成 */
     var max = Math.max.apply(null, numbers); /* 基本等同于 Math.max(numbers[0], ...) 或 Math.max(5, 6, ..) */
     ```

2. bind 的用法和使用场景(<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind">详细解释</a>)

   bind()方法创建一个新的函数，在 bind()被调用时，这个新函数的 this 被 bind 的第一个参数指定，其余的参数将作为新函数的参数供调用时使用。

   #### 语法

   ```ecmascript 6
   function.bind(thisArg[,arg1[,arg2[, ...]]])
   ```

   #### 参数

   > thisArg

   调用绑定函数时作为 this 参数传递给目标函数的值。 如果使用 new 运算符构造绑定函数，则忽略该值。当使用 bind 在 setTimeout 中创建一个函数（作为回调提供）时，作为 thisArg 传递的任何原始值都将转换为 object。如果 bind 函数的参数列表为空，执行作用域的 this 将被视为新函数的 thisArg。

   > argsArray

   当目标函数被调用时，预先添加到绑定函数的参数列表中的参数。

   #### 返回值

   返回一个原函数的拷贝，并拥有指定的 this 值和初始参数。

   #### 使用示例

   bind() 最简单的用法是创建一个函数，不论怎么调用，这个函数都有同样的 this 值。
   JavaScript 新手经常犯的一个错误是将一个方法从对象中拿出来，然后再调用，期望方法中的 this 是原来的对象
   （比如在回调中传入这个方法）。如果不做特殊处理的话，一般会丢失原来的对象。
   基于这个函数，用原始的对象创建一个绑定函数，巧妙地解决了这个问题：

   - 创建绑定函数

     ```ecmascript 6
     x = 9;    // 在浏览器中，this指向全局的 "window" 对象
     var module = {
       x: 81,
       getX: function() { return this.x; }
     };

     module.getX(); // 81

     var retrieveX = module.getX;
     retrieveX();
     // 返回9 - 因为函数是在全局作用域中调用的

     // 创建一个新函数，把 'this' 绑定到 module 对象
     // 新手可能会将全局变量 x 与 module 的属性 x 混淆
     var boundGetX = retrieveX.bind(module);
     boundGetX(); // 81
     ```

   - 偏函数

     bind()的另一个最简单的用法是使一个函数拥有预设的初始参数。只要将这些参数（如果有的话）
     作为 bind()的参数写在 this 后面。当绑定函数被调用时，这些参数会被插入到目标函数的参数列表的开始位置，
     传递给绑定函数的参数会跟在它们后面。

     ```ecmascript 6

     function list() {
       return Array.prototype.slice.call(arguments);
     }

     function addArguments(arg1, arg2) {
         return arg1 + arg2
     }

     var list1 = list(1, 2, 3); // [1, 2, 3]

     var result1 = addArguments(1, 2); // 3

     // 创建一个函数，它拥有预设参数列表。
     var leadingThirtysevenList = list.bind(null, 37);

     // 创建一个函数，它拥有预设的第一个参数
     var addThirtySeven = addArguments.bind(null, 37);

     var list2 = leadingThirtysevenList();
     // [37]

     var list3 = leadingThirtysevenList(1, 2, 3);
     // [37, 1, 2, 3]

     var result2 = addThirtySeven(5);
     // 37 + 5 = 42

     var result3 = addThirtySeven(5, 10);
     // 37 + 5 = 42 ，第二个参数被忽略
     ```
