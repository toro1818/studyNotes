## JS

###  JS初识

#### 1.1 JS组成

![image-20200815104206094](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200815104206094.png)

#### 1.2 JS书写位置

同html，有行内、内嵌、外部三种方式

1. <body></body>之间

 当浏览器载入网页body部分的时候，就会执行其中嵌入的javascript语句，执行之后输出的内容就显示咱网页中。

 2.<head></head>之间

有时候不需要一载入HTML页面就执行javascript程序，而是用户触发了某个事件，才需要调用javascript程序，这时候，我们通常这样的javascript代码放置在HTML页面中的<head></head>里

 3.javascript放在外部文件js里

加入某个javascript程序被多个HTML页面使用，最好的办法就是将这个javascript程序放置到一个后缀名为.js的文本文件里。这样做，显然可以提高javascript代码的复用性，减少代码维护的负担，不必将相同的javascript代码拷贝到多个HTML页面里。在HTML中引用外部的javascript代码，应该在head里写一句<script src="文件名"></script>，其中src的值，就是Javascript所在文件的文件路径。

tips：

html推荐双引号，js推荐使用单引号

#### 1.3 注释

注释方法同编程语言，

单行使用     //

多行使用	/*   */

#### 1.4 JS输入输出语句

![image-20200815105203733](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200815105203733.png)

#### 1.5 JS变量

使用var关键字声明

#### 1.6 JS数据类型

##### 1.6.1 简单数据类型

![image-20200815110448734](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200815110448734.png)

1.Number

**八进制前面加0，十六进制 前面加0x

**Number.MAX_VALUE数字型的最大值	Number.MIN_VALUE数字型的最小值

**Infinity 无穷大

**NaN 非数字          方法 isNaN(变量)返回布尔值，判断是否是非数字

2.string

**	字符串变量.length返回字符串的长度

**转义符

![image-20200815111625585](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200815111625585.png)

3.typeof 获取变量类型

**语法：typeof  变量（中间加空格）

##### 1.6.2 数据类型转换

1.转换为字符串类型

![image-20200815112742289](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200815112742289.png)

2.转换为数字型

![image-20200815112954653](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200815112954653.png)

3.转换为布尔型

![image-20200815113202607](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200815113202607.png) 	

#### 1.7 运算符

##### 1.7.1比较运算符

注意全等和其他语言不一致

![image-20200815114358473](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200815114358473.png)

##### 1.7.2逻辑运算符

**其他一致，注意逻辑与短路和逻辑或短路。

##### 1.7.3运算符优先级

![image-20200815115034790](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200815115034790.png)

#### 1.8 断点

![image-20200815143504484](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200815143504484.png)

#### 1.9 数组

##### 1.9.1数组的创建

1.利用new创建

var arr=new Array（）；

2.利用数组字面量

var arr=[];

var arr1=[1,2,'wy',true];   （可以放任意元素）

#### 1.10 函数

##### 1.10.1 函数声明

1.利用函数关键字自定义函数（命名函数）

function  函数名（变量）{

​			函数体

​			return 结果   （**可加可不加，不加返回的是undefined）

}

2.函数表达式（匿名函数）

var 变量名 = function（）{}；

##### 1.10.2 arguments的使用

![image-20200815145912264](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200815145912264.png)

##### 1.10.3 立即执行函数

语法：     (function(){})()   或者   (function(){}())

主要作用  ：  创建了一个独立的作用域。避免了命名冲突问题。

#### 1.11 作用域

1.11.1 全局变量和局部变量

特殊：全局变量（作用于整个script标签或者整个js文件）可以直接在函数中使用，和其他语言有点区别（我想是因为全部写在script标签中，故都能用）

js在es6前没有块级作用域，如在if语句中声明的变量，在块外也能使用，es6新增了块级元素。

#### 1.12 预解析

![image-20200815161536976](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200815161536976.png)

#### 1.13 对象

##### 1.13.1 创建对象

1. 利用对象自变量创建对象

​	![image-20200815162915355](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200815162915355.png)

2.利用new object创建对象

**![image-20200815164119336](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200815164119336.png)**

3.构造函数创建对象

![image-20200815164624686](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200815164624686.png)

![image-20200815164605092](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200815164605092.png)

4.new 的作用

![image-20200815164821197](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200815164821197.png)

##### 1.13.2 使用对象

![image-20200815162955040](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200815162955040.png)

##### 1.13.3 遍历对象属性

##### ![image-20200815165004950](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200815165004950.png)

#### 1.14 内置对象

##### 1.14.1 Math（非构造函数）

1.math常用函数

![image-20200816112816763](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200816112816763.png)

特殊：round（）函数，在.5时往大的取值，如-3.5取-3，其他情况皆是四舍五入。

2.random()函数

a.得到一个两数之间的随机数

这个例子返回了一个在指定值之间的随机数。这个值不小于 `min`（有可能等于），并且小于（不等于）`max`。

```js
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
```

b.得到一个两数之间的随机整数

这个例子返回了一个在指定值之间的随机整数。这个值不小于 `min` （如果 `min` 不是整数，则不小于 `min` 的向上取整数），且小于（不等于）`max`。

```js
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //不含最大值，含最小值
}
```

c.得到一个两数之间的随机整数，包括两个数在内

```js
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值 
}
```

##### 1.14.2 Date（构造函数，需要new）

1.date的使用

![image-20200816150220194](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200816150220194.png)

2.日期格式化

![image-20200816150301030](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200816150301030.png)

**注意getMonth和getDay**

3.获得总的毫秒数（时间戳）

![image-20200816151055488](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200816151055488.png)

4.不足2位补0

![image-20200816151452217](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200816151452217.png)

##### 1.14.3 Array

1.数组的创建

![image-20200816151736445](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200816151736445.png)

2.检测是否是数组

![image-20200816152043535](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200816152043535.png)

3.添加和删除数组元素

![image-20200816152454239](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200816152454239.png)

4.数组排序

![image-20200816152815020](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200816152815020.png)

特殊：

直接使用sort（）无法辨别两位数以上的数字，故最佳写法如下

![image-20200816153205166](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200816153205166.png)

5.数组索引

![image-20200816153344681](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200816153344681.png)

6.数组转字符串

![image-20200816153548530](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200816153548530.png)

7.其余方法

![image-20200816153650942](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200816153650942.png)

##### 1.14.4 字符串

1.基本包装类型

![image-20200816154049176](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200816154049176.png)

2.字符串的不可变

指字符串里面的值不可变，虽然看上去可以改变内容，但其实是地址改变了，内存中新开辟了一个内存空间。

SO，不要大量使用拼接字符串的操作。

3.根据字符返回位置

![image-20200816154906595](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200816154906595.png)

4.根据位置返回字符

![image-20200816155031491](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200816155031491.png)

5.字符串操作方法

![image-20200816155506309](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200816155506309.png)

6.其他方法

​	**replace（‘被替换字符’，‘替换为的字符’）                  只替换第一个字符

​	**split（‘分隔符’）															字符串转换为数组

### webAPIs

#### 0 案例位置

1.表单全选   P29 p30

2.鼠标经过背景换色   p28

3.密码框点击眼睛切换是否可视	p18

4.密码框提示是否满足需求	p24

5.淘宝关闭二维码 p20

6.循环精灵图背景 p21

7.显示隐藏文本框内容   p22

8.简单版发布留言案例   p44  p46

9.下拉菜单	p41

10.动态生成表格   p48~p53

11.跟随鼠标的天使  P70

12.JD按s键聚焦到搜索框 P73

13.5s后定时关闭的广告  P81

14. 倒计时效果  P84
15. 点击按钮后60s内不能再点击  P86
16. 5s后自动跳转页面 P92
17. 获取URL参数 P93
18. 模态框拖拽  P102
19. 仿JD放大镜 P105
20. 仿淘宝侧边栏  P115

#### 1 DOM（文档对象模型）基础

##### 1.1 DOM树

![image-20200819093432764](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200819093432764.png)

##### 1.2 获取DOM对象

###### 1.getElementById

![image-20200819093946704](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200819093946704.png)

###### 2.getElementsByTagName

![image-20200819094511451](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200819094511451.png)

###### 3.html5新增

![image-20200819095028216](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200819095028216.png)

注意：第一个不用加点，第二三个需要添加相应的点.或者#（.box  or  #nav）

###### 4.获取特殊元素对象（body、html）

![image-20200819095421103](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200819095421103.png)

##### 1.3 事件基础

###### 1.事件三要素

![image-20200819095846722](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200819095846722.png)

###### 2.执行事件的步骤（分别代表事件的三要素）

​			1.获取事件源

​			2.注册事件（绑定事件）

​			3.添加事件处理程序（采取函数赋值形式）

###### 3.常用鼠标事件

![image-20200819152321553](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200819152321553.png)

##### 1.4操作元素

###### 1.操作内容

![image-20200819100948718](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200819100948718.png)



区别：前者不识别html，后者识别

特殊：表单不是修改inner值，而是value值

<img src="C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200819102925362.png" alt="image-20200819102925362" style="zoom:67%;" />

###### 2.样式属性操作

<img src="C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200819104003506.png" alt="image-20200819104003506" style="zoom:80%;" />

<img src="C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200819105259083.png" alt="image-20200819105259083" style="zoom: 80%;" />

***样式较少时使用style，样式较多时使用classname

***如果想保留原类名，在使用element.classname ='   '时，使用多类名选择器，把原来的类名也加入进去。

###### 3.排他思想

![image-20200819110231437](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200819110231437.png)



###### 4.属性的获取和设置（另一个方法）

![image-20200819161248057](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200819161248057.png)

![image-20200819161203083](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200819161203083.png)

![image-20200819161220749](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200819161220749.png)

###### 5.H5自定义属性

​	8.1 H5规定自定义属性

​		自定义属性使用“data-”开头，如“data-index”

​	8.2 获取H5自定义属性

​		*兼容性获取 	element.getAttribute('data-index');

​		*H5新增 element.dataset.index或者element.dataset['index']   ie 11才开始支持

##### 1.5 节点操作

###### 1.节点概述

所有内容 都可以称之为节点。一般可分为

![image-20200819164820530](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200819164820530.png)

![image-20200819164654668](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200819164654668.png)

###### 2.节点层级

​	利用dom树可以把节点分为不同的层级关系，常见的是父子兄弟层级关系

​	1）父级节点

​		**`node.parentNode`**

​		*parentNode属性可返回某节点的父节点，注意时最近的一个父节点，即亲爸爸

​		*如果指定的节点没有父节点则返回null

​	2）子节点

![image-20200819170112311](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200819170112311.png)

![image-20200819170137872](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200819170137872.png)

***children**返回的是伪数组*****

![image-20200819170341848](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200819170341848.png)



![image-20200819170428441](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200819170428441.png)

<img src="C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200819170650585.png" alt="image-20200819170650585" style="zoom:80%;" />

3）兄弟节点

![image-20200820110622495](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200820110622495.png)

![image-20200820110651853](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200820110651853.png)

![image-20200820110731691](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200820110731691.png)

###### 3.创建节点

![image-20200820111753684](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200820111753684.png)

###### 4.添加节点

![image-20200820111827080](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200820111827080.png)

###### 5.删除节点

​	node.removeChild(child)

###### 6.复制节点（克隆节点）

![image-20200820113452557](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200820113452557.png)

###### 7.三种动态创建元素的区别在·

![image-20200820144935945](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200820144935945.png)

##### 1.6 DOM重点核心复习

![image-20200820145407179](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200820145407179.png)

https://www.bilibili.com/video/BV167411p7hi?p=56

P56

#### 2 DOM事件高级

##### 2.1注册事件

###### 	1. 概述

![image-20200820193003452](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200820193003452.png)

###### 	2.addEventListener事件监听方式

![image-20200820193116298](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200820193116298.png)

示例：

![image-20200820193240329](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200820193240329.png)

###### 3.attachEvent（IE9以下使用，以上已不支持，了解，不推荐使用）

![image-20200820193720770](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200820193720770.png)

###### 4.注册事件兼容性解决方案

![image-20200820193606684](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200820193606684.png)

##### 2.2删除事件

###### 	1.删除事件的方式

![image-20200820194220523](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200820194220523.png)

##### 3 DOM事件流

![image-20200820194515454](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200820194515454.png)

![image-20200820195427034](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200820195427034.png)

##### 4 事件对象

###### 4.1什么是事件对象

![image-20200820195852395](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200820195852395.png)

###### 4.2事件对象的使用方法

![image-20200820195923233](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200820195923233.png)

###### 4.3事件对象兼容性问题

![image-20200820195956033](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200820195956033.png)

###### 4.4事件对象的常用属性和方法

![image-20200820200326778](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200820200326778.png)

e.target和this的区别：前者点击那个元素就返回那个元素，后者返回绑定的元素

##### 5 阻止事件冒泡

###### 5.1 阻止事件冒泡的两种方式

![image-20200820201349881](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200820201349881.png)

###### 5.2 兼容性方案解决

![image-20200820201421779](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200820201421779.png)

##### 6 事件委托（代理、委派）

![image-20200820201639376](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200820201639376.png)

##### 7 常用鼠标事件

###### 7.1常用的鼠标事件

![image-20200820202119009](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200820202119009.png)

![image-20200820202106935](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200820202106935.png)

###### 7.2 鼠标事件对象

![image-20200820202521972](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200820202521972.png)

##### 8 常用的键盘事件

###### 8.1常用键盘事件

![image-20200821194221270](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200821194221270.png)

三个事件执行顺序  --keydown--keypresss--keyup

###### 8.2键盘事件对象

![image-20200821194828658](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200821194828658.png)

#### 3 BOM浏览器对象模型

##### 1 BOM概述

###### 1.1什么是BOM

![image-20200821200526177](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200821200526177.png)

###### 1.2 BOM的构成

![image-20200821200625712](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200821200625712.png)

![image-20200821200925133](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200821200925133.png)

##### 2 window对象的常见事件

###### 2.1窗口加载事件

![image-20200821201424327](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200821201424327.png)

![image-20200821201521324](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200821201521324.png)

###### 2.2调整窗口大小事件

![image-20200821201801460](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200821201801460.png)

##### 3 定时器

###### 3.1 setTimeout()定时器

![image-20200821202337952](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200821202337952.png)

###### 3.2 停止setTimeout()定时器

![image-20200821202735046](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200821202735046.png)

###### 3.3 setInterval() 定时器

![image-20200821202917322](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200821202917322.png)

###### 3.4 停止setInterval定时器

![image-20200821203354865](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200821203354865.png)

###### 3.5 this

this指向问题  一般情况下this的最终指向的是那个调用他的对象

1.全局作用域或者普通函数中this指向全局对象window（定时器里的this也指向window）

2.方法调用中，谁调用，this指向谁

3.构造函数中this指向构造函数的实例

##### 4 JS执行机制

###### 4.1 JS是单线程（原来）

###### 4.2 同步和异步（H5开始允许多线程）

**同步任务**  都放在主线程上执行形成一个*执行栈*

**异步任务**  JS的异步是通过回调函数实现的，异步任务有以下三种类型：

​					1.普通事件，如click、resize等

​					2.资源加载，如load、error等

​					3.定时器，包括setInterval、setTimeout等

###### 4.3 JS执行机制

![image-20200823095101022](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200823095101022.png)

**事件循环**

##### 5 loocation对象

###### 5.1 什么是location对象

![image-20200823100127022](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200823100127022.png)

###### 5.2 URL

![image-20200823100143409](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200823100143409.png)

###### 5.3 location对象的属性

![image-20200823100159686](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200823100159686.png)

###### 5.4 location对象的方法

![image-20200823101936957](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200823101936957.png)

##### 6 navigator对象

![image-20200823102239630](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200823102239630.png)

##### 7 history对象

![image-20200823102502858](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200823102502858.png)

#### 4 PC端网页特效

##### 1 元素偏移量offset

###### 1.1 offset概述

![image-20200823102814378](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200823102814378.png)

###### 1.2 offset和style区别

![image-20200823110725099](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200823110725099.png)

##### 2 元素可视区client

![image-20200823150322886](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200823150322886.png)

##### 3 元素滚动scroll系列属性