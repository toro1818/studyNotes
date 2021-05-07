# 今日内容

1. 变量


2. MySQL存储过程
3. MySQL触发器
4. 游标

## 变量

### 系统变量

```
系统变量那肯定就是mysql数据库为我们提供的，再细化的话又可以分为两种：全局变量和会话变量。

1、查看所有的系统变量
show global variables;
查看会话变量的时候只需要把global变成session就可以了。（会话变量的意思是只是在本次回话有效。会话的含义就是你开两个命令行窗口，会话变量的值的改变在另外一个无效。）

2、查看某个指定的系统变量
select @@global.变量名称；
查看会话的变量值的时候只需要把global变成session就可以了。

3、为某个变量赋值
set global【sessio】n 系统变量名 = 新值；
set @@global【@@session】.系统变量名 = 值；
```

### 自定义变量

```
自定变量就是用户自己定义的，而不是由系统提供的。自定义变量也可以分为两种：用户变量和局部变量。

1、用户变量
用户变量的作用域是当前会话，也就是说你再新建一个终端或者是命令行窗口就无效了。

（1）声明初始化：
set @用户变量名 = 值
set @用户变量名 := 值
select @用户变量名：=值

（2）赋值并查看
赋值是一个重点，常常和表还有存储过程等结合使用。
select 字段 into 自定义变量 from 表名；

2、局部变量
局部变量的作用域就是在定义他的begin end中有效。和我们java中的方法中的变量类似。

（1）声明：
declare 变量名 类型；
declare 变量名 类型 default 默认值；

（2）赋值
set @用户变量名 = 值
set @用户变量名 := 值
select @用户变量名：=值
select 字段 into 自定义变量 from 表名；

（3）使用
select 局部变量名;
```

## MySQL存储过程

含义：一组预先编译好的sQL语句的集合，理解成批处理语句

1、提高代码的重用性
2、简化操作
3、减少了编译次数并且减少了和数据库服务器的连接次数，提高了效率

### 创建语法

```
CREATE PROCEDURE 存储过程名（参数列表）
BEGIN
	存储过程体（一组合法的sql语句）
END
注意：
1、参数列表包含三部分
参数模式 参数名 参数类型
举例：
IN stuname VARCHAR（20）
参数模式：
IN：该参数可以作为输入，也就是该参数需要调用方传入值
OUT：该参数可以作为输出，也就是该参数可以
INOUT:既可作输入，也可做输出

2、
如果存储过程体仅仅只有一句话，BEGINEND可以省略

存储过程体中的每条sQL语句的结尾要求必须加分号。

存储过程的结尾可以使用DELIMITER重新设置语法：
DELIMITER 结束标记
案例：
DELIMITER |
```

### 基本语法

```
【调用存储过程】
CALL sp_name([proc_parameter]);
注意：存储过程名称后面必须加括号，即使该存储过程没有参数传递。

【查看存储过程】
SHOW PROCEDURE STATUS;
查看存储过程的详细：
SHOW CREATE PROCEDURE sp_name;

【删除存储过程】
DROP PROCEDURE sp_name;

【BEGIN … END 详解】
在 MySQL 中，BEGIN … END 语句的语法为：
BEGIN
[statement_list]
END
其中，statement_list 代表一个或多个语句的列表，列表内的每条语句都必
须用分号（;）来结尾。

【DELIMITER 命令】
在 MySQL 中，分号是语句结束的标识符，遇到分号表示该段语句已经结束，
MySQL 可以开始执行了。因此，解释器遇到存储过程体中的 statement_list
中的分号后就开始执行，然后会报出错误，因为没有找到和 BEGIN 匹配的 END。
这时就需要用到 DELIMITER 命令（DELIMITER 是定界符，分隔符的意思），
它是一条命令，不需要语句结束标识，语法为：
DELIMITER new_delemiter
new_delemiter 可以设为 1 个或多个长度的符号，默认的是分号（;），我们
可以把它修改为其他符号，如管道符：
DELIMITER |
在这之后的语句，以分号结束，解释器不会有什么反应，只有遇到了管道符，才
认为是语句结束。注意，使用完之后，还需要把定界符修改回来。

【存储过程示例】
DELIMITER |
CREATE PROCEDURE sp_example(IN classnoin VARCHAR(6), OUT
countout INTEGER)
BEGIN
SET countout = (SELECT COUNT(*) FROM student WHERE
classno= classnoin);
END |
DELIMITER ;
SET @count=0;
CALL sp_example('Rj0801',@count);
SELECT @count;

```

## 触发器

#### 一、基本概念

**触发器**是一种特殊类型的存储过程，它不同于存储过程，主要是通过事件触发而被执行的，即不是主动调用而执行的；而存储过程则需要主动调用其名字执行

触发器：trigger，是指事先为某张表绑定一段代码，当表中的某些内容发生改变（增、删、改）的时候，系统会自动触发代码并执行。



#### 二、作用

1. 可在写入数据前，强制检验或者转换数据(保证护数据安全)

2. 触发器发生错误时，前面用户已经执行成功的操作会被撤销，类似事务的回滚

   

#### 三、创建触发器

**基本语法**

```sql
delimiter 自定义结束符号
create trigger 触发器名字 触发时间 触发事件 on 表 for each row
begin
    -- 触发器内容主体，每行用分号结尾
end
自定义的结束符合

delimiter ;
```

`on 表 for each`：触发对象，触发器绑定的实质是表中的所有行，因此当每一行发生指定改变时，触发器就会发生



##### 触发时间

当 SQL 指令发生时，会令行中数据发生变化，而每张表中对应的行有两种状态：**数据操作前和操作后**

- before：表中数据发生改变前的状态
- after：表中数据发生改变后的状态

**PS**：如果 before 触发器失败或者语句本身失败，将不执行 after 触发器(如果有的话)



##### 触发事件

触发器是针对数据发送改变才会被触发，对应的操作只有

- INSERT
- DELETE
- UPDATE

##### 触发器示例 

```
DELIMITER | 

CREATE TRIGGER teacher_ai AFTER INSERT ON teacher FOR EACH ROW 

BEGIN 

UPDATE teacher SET tsex='男' WHERE tno=new.tno; 

END | 

DELIMITER ;
```



##### 注意事项

- 在 MySQL 5 中，触发器名必须在每个表中唯一，但不是在每个数据库中唯一，即同一数据库中的两个表可能具有相同名字的触发器
- 每个表的每个事件每次只允许一个触发器，因此，每个表最多支持 6 个触发器，before/after insert、before/after delete、before/after update

#### 四、查看触发器

```
1.查看全部触发器

语法：`show triggers;`
	或者SHOW TRIGGERS\G（注意结尾不需要分号;）

2.查看触发器的创建语句

语法：`show create trigger 触发器名字;`
```

#### 五、触发触发器

触发不是自动手动触发的，而是在对应的事件发生后才会触发。比如我们创建的触发器，只有在对订单表进行数据操作的时候，触发器才会执行

#### 六、删除触发器

触发器不能修改，只能删除

语法：`drop trigger + 触发器名字`

#### 七、触发器应用

触发器针对的是数据库中的每一行记录，每行数据在操作前后都会有一个对应的状态，触发器将没有操作之前的状态保存到 old 关键字中，将操作后的状态保存到 new 中

语法：`old/new.字段名`

需要注意的是，**old 和 new 不是所有触发器都有**

| 触发器类型     | new和old的使用                                               |
| -------------- | ------------------------------------------------------------ |
| INSERT型触发器 | 没有 old，只有 new，new 表示将要(插入前)或者已经增加(插入后)的数据 |
| UPDATE型触发器 | 既有 old 也有 new，old 表示更新之前的数据，new 表示更新之后的数据 |
| DELETE型触发器 | 没有 new，只有 old，old 表示将要(删除前)或者已经被删除(删除后)的数据 |

tips：**MySQL 的触发器中不能对本表进行 insert、update 和 delete 操作，否则会报错**

#### 八.触发器的执行顺序 

我们建立的数据库一般都是 InnoDB 数据库，其上建立的表是事务性表，也 就是事务安全的。这时，若 SQL 语句或触发器执行失败，MySQL 会回滚事务， 有：

① 如果 BEFORE 触发器执行失败，SQL 无法正确执行； 

② SQL 执行失败时，AFTER 型触发器不会触发； 

③ AFTER 类型的触发器执行失败，SQL 会回滚。

#### 九、优缺点

优点

- 触发器可以通过数据库中的关联表实现级联更改，即一张表数据的改变会影响其他表的数据
- 可以保证数据安全，并进行安全校验

缺点

- 过分依赖触发器，影响数据库的结构，增加数据库的维护成本

## 游标

#### 简介

  游标实际上是一种能从包括多条数据记录的结果集中每次提取一条记录的机制。

  游标充当指针的作用。

  尽管游标能遍历结果中的所有行，但他一次只指向一行。

  游标的作用就是用于对查询数据库所返回的记录进行遍历，以便进行相应的操作。

#### 用法

  一、声明一个游标: declare 游标名称 CURSOR for table;(这里的table可以是你查询出来的任意集合)

```
游标使用declare语句创建；declare命名游标，并定义响应的select语句，根据需要带where和其他子句；例如：
create procedure processorders()
begin
       declare ordernumbers CURSOR
       for
       select order_num from orders;

end;

这个存储过程中，declare定义和命名了游标ordernumbers，存储过程处理完成后，游标消失（因为它局限于存储过程内）。
```

  二、打开定义的游标:open 游标名称;
  三、获得下一行数据:FETCH  游标名称 into testrangeid,versionid;
  四、需要执行的语句(增删改查):这里视具体情况而定
  五、释放游标:CLOSE 游标名称;
 	注:mysql存储过程每一句后面必须用;结尾，使用的临时字段需要在定义游标之前进行声明。

  六、循环遍历（见示例）

#### 示例

```
	--自定义变量
	declare done int default 0;
	declare _cur 对应变量类型;
	
	-- 声明游标
	declare m_cur cursor for select col from 表;
   	declare continue handler for not found set done=true;
	--也可以是DECLARE CONTINUE HANDLER FOR SQLSTATE '02000' SET done = 1;
	--都代表遍历结束时把done设为1
	
　　 -- 打开游标
    open m_cur;

　　 -- 一层嵌套循环
    repeat
    fetch m_cur into _cur;
        if not _done then

　　-- 写逻辑

　　end if;
    
    until _done end repeat;  --直到循环读取结束
    close m_cur;-- 关闭游标
```

