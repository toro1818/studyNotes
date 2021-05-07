### all 和 any

#### 1.all

ALL运算符是一个逻辑运算符，它将单个值与子查询返回的单列值集进行比较。
ALL运算符必须以比较运算符开头，例如：>，>=，<，<=，<>，=，后跟子查询。
如下，对于ALL运算符的条件和描述说明：

| 条件        | 描述                                                  |
| ----------- | ----------------------------------------------------- |
| c > ALL(…)  | c列中的值必须大于要评估为true的集合中的最大值。       |
| c >= ALL(…) | c列中的值必须大于或等于要评估为true的集合中的最大值。 |
| c < ALL(…)  | c列中的值必须小于要评估为true的集合中的最小值。       |
| c <= ALL(…) | c列中的值必须小于或等于要评估为true的集合中的最小值。 |
| c <> ALL(…) | c列中的值不得等于要评估为true的集合中的任何值。       |
| c = ALL(…)  | c列中的值必须等于要评估为true的集合中的任何值。       |

**例1：查找工资大于部门ID为6的员工最高工资的所有员工：**

```sql
SELECT 
	NAME,
	salary 
FROM
	employees 
WHERE
	salary > ALL ( SELECT salary FROM employees WHERE department_id = 6 ) 
ORDER BY
	salary;
```

#### 2.any

ANY运算符是一个逻辑运算符，它将值与子查询返回的一组值进行比较。 ANY运算符必须以比较运算符：>，>=，<，<=，=，<>开头，后跟子查询。
如下，对于ANY运算符的条件和描述说明：

| 条件         | 描述                                                    |
| ------------ | ------------------------------------------------------- |
| x = ANY (…)  | c列中的值必须与集合中的一个或多个值匹配，以评估为true。 |
| x != ANY (…) | c列中的值不能与集合中的一个或多个值匹配以评估为true。   |
| x > ANY (…)  | c列中的值必须大于要评估为true的集合中的最小值。         |
| x < ANY (…)  | c列中的值必须小于要评估为true的集合中的最大值。         |
| x >= ANY (…) | c列中的值必须大于或等于要评估为true的集合中的最小值。   |
| x <= ANY (…) | c列中的值必须小于或等于要评估为true的集合中的最大值。   |

**例1：查找薪水低于每个部门平均薪水的所有员工：**

```sql
SELECT 
	NAME,
	salary 
FROM
	employees 
WHERE
	salary < ANY ( SELECT AVG( salary ) FROM employees GROUP BY department_id ) 
ORDER BY
	salary DESC;
```

### EXISTS 和 NOT EXISTS

#### 1.EXISTS

EXISTS代表存在量词∃。带有EXISTS谓词的子查询不返回任何数据，只产生逻辑真值“true”或者逻辑假值“false”。

一个例子：

要求：查询选修了课程”操作系统“的同学

SQL语句：

```cpp
SELECT Sname FROM student


WHERE EXISTS


(SELECT * FROM sc,course WHERE Sno=student.Sno AND sc.Cno=course.Cno AND course.Cname="操作系统")
```

#### 2.NOT EXISTS

与EXISTS谓词相对的是NOT EXISTS谓词。使用存在量词NOT EXISTS后，若对应查询结果为空，则外层的WHERE子语句返回值为真值，否则返回假值。