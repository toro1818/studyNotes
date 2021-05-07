package com.example.onetomany;

import com.example.onetomany.entity.Class;
import com.example.onetomany.entity.Student;
import com.example.onetomany.repository.classRepository;
import com.example.onetomany.repository.studentRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class OnetomanyApplicationTests {

    @Test
    void contextLoads() {
        System.out.println("初始化表.. ");
    }

    @Autowired
    classRepository clsdao;
    @Autowired
    studentRepository studao;
    @Test
    void addClassStu(){
        Class cls=new Class();
        cls.setCname("jpa学习班");
        clsdao.save(cls);
        Student stu=new Student();
        stu.setSname("王五");
        stu.setCls(cls);
        studao.save(stu);

    }

}
