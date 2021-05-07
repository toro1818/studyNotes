## MySQL 流程控制结构

| 序号 | 结构名称 | 说明                                         |
| ---- | -------- | -------------------------------------------- |
| 1    | 顺序结构 | 程序从上往下依次执行                         |
| 2    | 分支结构 | 程序从两条或多条路径中选择一条去执行         |
| 3    | 循环结构 | 程序在满足一定条件的基础上，重复执行一段代码 |

### ⒈顺序结构

  你啥都不干默认就是顺序结构，还介绍个毛，略。

### ⒉分支结构

#### 1. if函数

　功能：实现简单的双分支

　语法：　

```
1 if(表达式1,表达式2,表达式3)
```

　执行策略：如果表达式1成立，则if函数返回表达式2的值，如果不成立则返回表达式3的值。

　应用：任何地方

#### 2. case结构

　①第一种使用方式类似于java中的switch语句，一般用于实现等值判断

　语法：

```
1 case 变量|表达式|字段
2 when 要判断的值 then 返回的值1或语句1;
3 when 要判断的值 then 返回的值2或语句2;
4 ...
5 else 要返回的值n或语句n;
6 end case;
```

　②第二种使用方式类似于java中的多重if语句，一般用于实现区间判断

　语法：

```
1 case
2 when 要判断的条件1 then 返回的值1或语句1;
3 when 要判断的条件2 then 返回的值2或语句2;
4 ...
5 else 要返回的值n或语句n;
6 end case;
```



　特点：

　ⅰ 可以作为表达式嵌套在其它语句中使用，可以放在任何地方，begin end中或begin end的外面。可以作为独		立的语句去使用，只能放在begin end中。

　ⅱ 如果when中的值满足或条件成立，则执行对应的then后面的语句，并且结束case，如果都不满足，则执  		行else中的语句或值。

　ⅲ else可以省略，如果else省略了，并且所有的when条件都不满足，则返回null

#### 3. if结构

　功能：实现多重分支

　语法：

```
1 if 条件1 then 语句1;
2 elseif 条件2 then 语句2;
3 ...
4 else 语句n;    #可以省略
5 end if;
```

　应用：只能应用在begin end中

### ⒊循环结构

分类：while、loop、repeat

循环控制：iterate类似于continue，结束本次循环。leave类似于break，结束当前循环。

#### 1. while

　语法：

```
1 [标签:] while 循环条件 do
2     循环体;
3 end while [标签];        #有可能执行0次，先判断后执行
```

#### 2. loop

　语法：

```
1 [标签:] loop
2     循环体;
3 end loop [标签];        #没有条件的死循环，可以用来模拟简单的死循环
```

#### 3. repeat

　语法：

```
1 [标签:] repeat
2     循环体;
3 until 结束循环的条件
4 end repeat [标签];        #肯定至少执行一次，先执行后判断
```

　　

　　*案例：批量插入，根据次数插入到admin表中多条记录，只插入偶数次。



```
 1 create procedure test_while(in insertCount int)
 2 begin
 3     declare i int default 0;    #局部变量i 默认值0
 4     a:while i <= insertCount do #如果i<=insertCount的话
 5         set i = i + 1;    #i加1
 6         if mod(i,2) != 0 then iterate a;    #如果i是奇数的话，结束本次循环
 7         end if;
 8         insert into users(UserName,`PassWord`) VALUES(concat('fanqi',i),'admin');
 9 	   end while a;
10 end;
11 
12 call test_while(50);
```