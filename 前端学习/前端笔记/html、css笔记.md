### 前端学习路线

前端学习线路：
HTML+CSS基础学习[av78942920](https://www.bilibili.com/video/av78942920/?spm_id_from=333.788.b_636f6d6d656e74.9)
HTML5+CSS3提升视频[av80040130](https://www.bilibili.com/video/av80040130/?spm_id_from=333.788.b_636f6d6d656e74.10)
JavaScript基础语法[av80973606](https://www.bilibili.com/video/av80973606/)
WebAPI编程+jQuery快速开发+JavaScript高级（含ES6）[av86659376](https://www.bilibili.com/video/av86659376/)
前后端交互 Node+Gulp+MongoDB+Express+ajax [av86666687](https://www.bilibili.com/video/av86666687/)
Vue全家桶学习入门到实战 [av86673690](https://www.bilibili.com/video/av86673690/)

全部课件链接: https://pan.baidu.com/s/1qtgtbcBbl-cxPes47-H6LA 提取码: 93p8

IT技术交流群：544493957，小伙伴们一起交流学习

### CSS

#### 1.文本属性

color

text-align			文本对齐			

text-indent		  文本缩进（常用em单位）

text-decoration   文本修饰（下划线之类）

line-height		  行高

#### 2.复合选择器

![image-20200731212011018](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200731212011018.png)

#### 3.元素显示模式

![image-20200731211814750](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200731211814750.png)

![image-20200731211846542](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200731211846542.png)

​	tips：行内块元素之间有空隙****

#### 4.css背景

![image-20200731211510709](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200731211510709.png)

![image-20200731211639909](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200731211639909.png)

#### 5.三大特性

##### 5.1层叠性

*说明
层叠性是多种CSS样式的叠加，是浏览器处理样式冲突的方式。在HTML中对于同一个元素可以有多个CSS样式存在，当有相同权重的样式存在时，会根据这些样式出现的先后顺序来决定，处于最后面的CSS样式将会覆盖前面的CSS样式。

*原则
通常出现样式冲突，会按CSS书写的顺序，以最后的样式为准。

1. 样式不冲突，不会层叠。
2. 样式冲突，遵循就近原则。 长江后浪推前浪，后面样式盖前面。

##### 5.2CSS继承性

*说明
简单的理解为—“子承父业“，是指子标签会继承父标签的==**某些**==样式，如文本颜色和字号。想要设置一个可继承的属性，只需将它应用于父元素即可。

*举例

```text
<style>
    div{color:pink;font-size:20px;}
</style>
<div>
    <span>
        我是什么颜色的？
    </span>
</div>
```

*注意

1. 合理使用继承可以简化代码，降低CSS样式的复杂性。对于字体、字号、颜色、行距等**==文本类属性==**具有继承性，都可以在body中统一设置，然后影响文档中所有文本。
2. 但是，并不是所有的CSS属性都可以继承，如边框、外边距、内边距、背景、定位、元素高度等**==与块级元素相关的==**属性都不具有继承性

##### 5.3CSS优先级

一些特殊的情况：

1. **==继承样式的权重为0。==**也就是说，在嵌套结构中，无论父元素样式权重多大，子元素继承时，应用在子元素上的权重都为0，即子元素定义的样式会覆盖所有继承来的样式。
2. **==行内样式优先。==**应用style属性的元素，其行内样式的权重非常高，可以理解为远大于100。总之，他拥有比上面提高的选择器都大的优先级。
3. 权重相同时，CSS遵循就近原则。也就是说靠近元素的样式具有最大的优先级，或者说排在最后的样式优先级最大。
4. CSS定义了一个!important命令，该命令被赋予最大的优先级。也就是说不管权重如何以及样式位置的远近，!important都具有最大优先级。

*说明
或称非凡性，是需要用一套计算公式来去计算CSS的权重。CSS的权重是一个衡量CSS值优先级的一个标准，规则如下：
用一个四位的数字串(CSS2是三位)来表示，更像四个级别，值从左到右，左面的最大，一级大于一级，数位之间**没有进制**，级别之间不可超越。

![img](https://pic1.zhimg.com/80/v2-50ec40c8bac0ddc3750fed6bcc63f6d8_720w.jpg)

*注意

1. 继承的权重为 0。
2. 数值之间没有进制计算，比如： 0,0,0,5 + 0,0,0,5 =0,0,0,10 而不是 0,0, 1, 0， 所以不会存在10个div等于一个类选择器的状况。
3. 权重是用来计算优先级的，层叠是来表现优先级的。

 4.行高继承可以使用   font:12px/1.5   

表示行高为字体大小的1.5倍，这样可以随意修改后代的字体大小而行高比例一致

*总结优先级
!important>行内样式> ID 选择器>类(伪元素、伪类、属性)选择器>元素选择器>通用选择器

#### 6.盒子模型

##### 6.1CSS 盒子模型(Box Model)

所有HTML元素可以看作盒子，在CSS中，"box model"这一术语是用来设计和布局时使用。

CSS盒模型本质上是一个盒子，封装周围的HTML元素，它包括：边距，边框，填充，和实际内容。

盒模型允许我们在其它元素和周围元素边框之间的空间放置元素。

下面的图片说明了盒子模型(Box Model)：


![CSS box-model](https://www.runoob.com/images/box-model.gif)

不同部分的说明：

- **Margin(外边距)** - 清除边框外的区域，外边距是透明的。
- **Border(边框)** - 围绕在内边距和内容外的边框。
- **Padding(内边距)** - 清除内容周围的区域，内边距是透明的。
- **Content(内容)** - 盒子的内容，显示文本和图像。

##### 6.2边框border

​	1.简写border:2px solid red【无顺序之分】

​	2.边框会影响盒子大小

​	3.相邻边框合并            border-collapse：collapse

##### 6.3内边距padding

​	1.当盒子有了宽高padding会影响盒子大小

​	【所以如果不指定盒子的weight/height，则不会撑开盒子】

​	【继承时宽高也继承 ，但不声明时，使用padding就不会撑开 盒子。但指定 weight：100%时，就会撑开		盒子了】

##### 6.4外边距margin

​	1.margin典型应用——块级盒子水平居中

​		条件：①盒子指定宽度②盒子左右外边距设置为auto

​		代码：margin：0 auto；

​	2.行内元素和行内块元素水平居中

​		与块级不同，只需要把父级元素添加   text-align：center。

​	3.嵌套块元素垂直外边距塌陷

​		添加overflow：hidden

##### 6.5清楚内外边距

由于网页元素很多带有默认内外边距，而且不同浏览器默认不同。因此布局前清除内外边距。

*{

​	padding：0px；

​	margin：0px；

}

#### 7.圆角边框

​	语法：   border-radius

​	圆形：盒子为正方形   border-radius设为50%

​	圆角矩形（胶囊）：border-radius设为高度的一半

​	任意设置：border-radius：10px 10px 15px 20px

​						也可以单独设置border-top-left-radius或者border-bottom-right-radius

#### 8.盒子阴影

![image-20200803093818226](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200803093818226.png)





 ***blur属性设置阴影的虚实

#### 9.文字阴影

![image-20200803094555639](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200803094555639.png)

#### 10.浮动（float）

##### 	10.1网页的三种布局

​		布局方式是用来摆放盒子的。

​		**·**标准流（普通流）：默认的方式即是标准流

​		**·**浮动：改变元素标签的默认排列方式

​		**·**定位

##### 	10.2网页布局第一准则

​		多个块级元素纵向排列找标准流，多个块级元素横向排列找浮动。

##### 	10.3什么是浮动

​		浮动：float属性用于创建浮动框，将其移动到一边，直到左边缘或右边缘触及包含块或另一个浮动框的		边框。

​		语法：                    float：属性值（包括none、left、right）

##### 	10.4浮动特性

​		1. 浮动元素会脱离标准流（脱标）

​			**·**脱离标准普通流的控制（浮）移动到指定位置（动）

​			**·**浮动的盒子不再保留原先的位置（比如原本在上面的盒子的位置被后一个盒子占有，而自身浮在页				面上）

​		2.如果多个盒子都设置了浮动，则它们会按照属性值一行内显示并且顶端对齐排列。

​			注意：浮动的元素是互相贴靠在一起的（不会有缝隙），如果父级宽度装不下这些浮动的盒子，多出			的盒子会另起一行对齐

​		3.浮动元素会 具有行内块元素特性。

​			任何元素都可以浮动，且添加浮动后都具有行内块元素相似的特性。（也就说相当于添加了display：			inline-block）

​			·如果块级盒子没有设置宽度，默认宽度和父级一样宽，但是添加浮动后，它的大小根据内容来决定。

​			·浮动的盒子中间是没有缝隙的，是紧挨着一起的。

​			·行内元素同理

##### 	10.5浮动元素经常和标准流父级搭配使用

##### 	10.6网页布局第二准则

​	先设置盒子大小，之后设置盒子的位置。

#### 11.清除浮动

##### 	11.1清除浮动的本质

​		清除浮动的本质是清除浮动元素脱离标准流造成的影响。

##### 	11.2清除浮动的策略

​		闭合浮动，只让浮动在父盒子内部影响，不影响父盒子外面的其他盒子。

##### 	11.3清除浮动——额外标签法

​		隔墙法，就是在最后一个浮动的子元素后面添加一个额外标签，添加清除浮动样式。（实际工作中不常		用）（注意的是，添加的额外标签必须是块级元素）

​		<img src="C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200803113749544.png" alt="image-20200803113749544" style="zoom:50%;" />

##### 	11.4清除浮动——父级添加overflow

​		可以给父级添加overflow属性，将其设置为hidden、auto或者scroll

​		优点：简洁  缺点：无法显示溢出部分

##### 	11.5清除浮动——：after伪元素法

​		额外标签法的升级版。给父元素添加（使用时，只需要给父元素class中多添加一个clearfix）

​		具体语法：

​		.clearfix:{

​			content:"";

​			display:block;

​			height:0;

​			clear:both;

​			visibility:hidden;

​		}

​		.clearfix{		/*IE6、7专有*/

​			*zoom:1;

​		}

​		优点：没有增加标签，结构更简单     缺点：照顾低版本浏览器

##### 	11.6清除浮动——双伪元素清除浮动

​		也是给 父元素添加

​		语法：

​		.clearfix:before,.clearfix:after{

​			content:"";

​			display:table;

​		}

​		.clearfix:after{

​			clear:both;

​		}

​		.clearfix{

​			*zoom:1;

​		}

​		优点：代码更简洁        缺点：照顾低版本浏览器        代表网站：小米、腾讯

##### 		11.7清除浮动总结

​			1.为什么要清除浮动？

​				①父级没有高度

​				②子盒子浮动了

​				③影响下面布局

​			2.清除浮动的方法比较

​				<img src="C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200803115546910.png" alt="image-20200803115546910" style="zoom: 67%;" />

#### 12.定位

##### 12.1为什么用定位

![image-20200805153544445](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200805153544445.png)

##### 12.2定位组成

定位模式+边偏移

定位模式：static、relative、absolute、fixed、sticky

边偏移：top、bottom、left、right

##### 12.3相对定位

![image-20200805153806474](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200805153806474.png)

##### 12.4绝对定位

![image-20200805154051146](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200805154051146.png)

​	tips:

①子绝父相

​             ![image-20200805154147535](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200805154147535.png)

②绝对定位水平居中

​	加了绝对定位的盒子不能通过margin：0 auto水平居中，但可以采取以下做法：

​	1.left：50%：让盒子的左侧移动到父级元素的水平中心位置

​	2.margin-left：负的盒子宽度的一半 px：让盒子向左移动自身宽度的一半

##### 12.5固定定位

固定定位的特点：

1.以浏览器的可视窗口为参照点元素。

Tips：固定到版心右侧

​		语法：position：fixed；

​					left：50%；

​					margin-left：版心宽度的一半



##### 12.6粘性定位

![image-20200805154514492](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200805154514492.png)

##### 12.7定位总结

![image-20200805154531294](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200805154531294.png)

##### 12.8定位叠放顺序

![image-20200805155025016](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200805155025016.png)

##### 12.9定位的特殊性

​	1.行内元素添加绝对或者相对定位，可以直接设置高度和宽度。

​	2.块级元素 添加绝对或者相对定位，如果不给宽度或者高度，默认是内容的大小

​	3.脱标的盒子不会触发外边距塌陷（浮动元素、绝对定位、固定定位）

​	4.绝对定位（固定定位）会完全压住盒子

​			浮动元素不同，只会压住它下面标准流的盒子，但不会压住下面标准流盒子里面的文字（图   片）。

​			但是绝对定位（固定定位）会压住下面标准流所有的内容。

​			

#### 13.显示与隐藏

##### 13.1display显示隐藏

![image-20200806142853163](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200806142853163.png)

##### 13.2visibility显示隐藏

![image-20200806142948446](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200806142948446.png)

​		如果隐藏元素想要原来位置就用visibility：hidden

​		反之用display：none（实际中用的更多）

##### 13.3overflow显示溢出隐藏

​	overflow指定了如果内容超出盒子会发生什么

![image-20200806142613967](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200806142613967.png)



#### 14.精灵图

1、精灵图技术产生的目的：很多大型网页在首次加载的时候都需要加载很多的小图片，而考虑到在同一时间，服务器拥堵的情况下，为了解决这一问题，采用了精灵图这一技术来缓解加载时间过长从而影响用户体验的这个问题。

2、精灵图技术的本质：所谓精灵图就是把很多的小图片合并到一张较大的图片里，所以在首次加载页面的时候，就不用加载过多的小图片，只需要加载出来将小图片合并起来的那一张大图片也就是精灵图即可，这样在一定程度上减少了页面的加载速度，也一定程度上缓解了服务器的压力。

其实说白了就是将精灵图设为一个大背景，然后通过background-position来移动背景图，从而显示出我们想要显示出来的部分。

#### 15.字体图标

##### 15.1字体图标的获取与使用

网站：iconmoon、iconfont

使用：下载完成后，将fonts文件放入同级目录，调用时只需复制demo.html中的方框，再设置样式即可。引入方式直接复制style.css里的第一段代码。

#### 15.2字体图标的追加

重新进入网站，import原先的json文件，然后选择新添的图标，最后替换全部文件即可。

#### 16.三角画法

##### 16.1普通三角

制作类似三角

![image-20200808145444381](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200808145444381.png)

语法：

​		.选择器{

​					width:0;

​					height:0;

​					border:10px solid transparent;

​					border-left-color:black;

}

具体使用时搭配定位（注意添加line-height:0和font-size：0以保证兼容性）：

![image-20200808145717518](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200808145717518.png)





##### 16.2进阶三角

思路：https://www.bilibili.com/video/BV14J4114768?p=271

绘制如图三角

![image-20200808160227468](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200808160227468.png)

![image-20200808160121592](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200808160121592.png)

#### 17.用户界面样式

##### 17.1鼠标样式

语法： .选择器{

​			cursor:pointer;		

}

![image-20200808150204854](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200808150204854.png)

##### 17.2 取消表单轮廓、防止拖拽文本域

如textarea选中时的蓝色轮廓和右下角的拖拽

![image-20200808150657300](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200808150657300.png)



outline：none；取消轮廓

resize：none；防止拖拽

#### 18.vertical-align运用

##### 18.1行内块和文字对齐方式

![image-20200808151230763](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200808151230763.png)

##### 18.2解决图片底侧的空白缝隙

![image-20200808151823911](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200808151823911.png)

#### 19.溢出文字省略号显示

##### 19.1单行情况

使用如下代码即可

![image-20200808152250927](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200808152250927.png)

##### 19.2多行情况

![image-20200808152457909](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200808152457909.png)

#### 110.tips

##### 	110.1CSS属性书写顺序

![image-20200804095833472](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200804095833472.png)		

##### 	110.2页面布局整体思路

![image-20200804100301605](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200804100301605.png)

​		**版心一般确定宽度

##### 110.3导航栏注意点

![image-20200804111545353](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200804111545353.png)

##### 110.4常用模块命名

![image-20200812100857294](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200812100857294.png)

##### 110.5logoSEO优化

![image-20200812112308014](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200812112308014.png)

##### 110.6 li

li本身就有一像素的边框，故制作hover效果添加边框效果时，为防止抖动，可以把原来的li的边框设为透明。![image-20200814150025744](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200814150025744.png)

### HTML

#### 1.网站图标favicon

​	步骤：1.切图（png，透明）

​				2.网站转换      例如bitbug网站

​				3.引入（放在根目录<link *rel*="shortcut icon" *href*="favicon.ico" *type*="image/x-icon">）

#### 2.TDK三大标签SEO优化

​	这个会影响网站的自然排名。

​	详情见https://www.bilibili.com/video/BV14J4114768?p=304

​	2.1title

​	2.2description

​	2.3keywords

### CSS3新特性

#### 1.新增选择器

*类选择器、属性选择器、伪类选择器的权值都为10*

*伪元素选择器权重为1*

##### 1.1属性选择器

![image-20200809152509232](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200809152509232.png)

1. 利用属性选择器就可以不用借助于类或者id选择器

   /* 必须是input 但是同时具有 value这个属性 选择这个元素 [] */

   ​    input[*value*] {

   ​      color:pink;

   ​    }

2. 属性选择器还可以选择属性=值的某些元素 重点务必掌握的

    /* 只选择 type =text 文本框的input 选取出来 */

   ​    input[*type*=text] {

   ​      color: pink;

   ​    }

   

3. 属性选择器可以选择属性值开头的某些元素

    /* 选择首先是div 然后 具有class属性 并且属性值 必须是 icon开头的这些元素 */

   ​    div[*class*^=icon] {

   ​      color: red;

   ​    }

4. 属性选择器可以选择属性值结尾的某些元素

   section[*class*$=data] {

   ​      color: blue;

   ​    }

5. 属性选择器可以选择包含属性值的某些元素

   section[class*=data] {

   ​      color: blue;

   ​    }

##### 1.2结构伪类选择器

![image-20200809152610118](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200809152610118.png)

nth-child（n）选择某个父元素的一个或多个特定的子元素（nth-of-type方法类似）

1. n可以是数字，关键字和公式

2. n如果是数字，就是选择第n个子元素，里面数字从1开始

3. n可以是关键字：even偶数，odd奇数

4. n可以是公式：常见的公式如下（如果n是公式，则从0开始计算，但是第0个元素或者超出了元素的个数会被忽略）

   ![image-20200809153219983](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200809153219983.png)

**区别**

1.nth-child对父元素里面所有孩子排序选择（序号是固定的）先找到第n个孩子，然后再看是否和E匹配

2.nth-of-type对父元素里面指定子元素进行 排序选择。先去匹配E，然后再根据E找第n个孩子



##### 1.3伪元素选择器

![image-20200809153708426](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200809153708426.png)

伪元素使用例子：https://www.bilibili.com/video/BV14J4114768?p=288（配合字体图标等）

#### 2.盒子模型

##### 2.1border-box

![image-20200809154311676](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200809154311676.png)



所以可以在布局前添加（方便）

*{

​	padding：0；

​	margin：0；

​	box-sizing：border-box；

}

#### 3.其它特性

##### 3.1图片模糊处理

​		语法：  filter：函数（）；					例如filter：blur（5px）;         数值越大越模糊

##### 3.2计算calc函数

​	![image-20200809154804580](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200809154804580.png)

##### 3.3过渡（重点）

​    			*常搭配hover使用*

![image-20200809154849633](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200809154849633.png)

*示例：*

![image-20200809155042949](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200809155042949.png)

### HTML新特性

#### 1.html5新特性

##### 1.1新的语义化标签

![image-20200808170425050](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200808170425050.png)

##### 1.2视频标签<video>

所有浏览器都支持mp4格式，故尽量使用mp4

![image-20200808170850289](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200808170850289.png)

示例

![image-20200808170937576](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200808170937576.png)

##### 1.3音频标签<audio>

所有浏览器都支持mp3格式

使用方法同视频。

详细属性见菜鸟教程！！

##### 1.4input新增类型

![image-20200809151644996](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200809151644996.png)

##### 1.5新增表单属性

![image-20200809151724844](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20200809151724844.png)