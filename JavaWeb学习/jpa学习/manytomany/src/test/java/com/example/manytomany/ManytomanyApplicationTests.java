package com.example.manytomany;

import com.example.manytomany.dao.EmployeeDao;
import com.example.manytomany.dao.ProjectDao;
import com.example.manytomany.entity.Employee;
import com.example.manytomany.entity.Project;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@SpringBootTest
class ManytomanyApplicationTests {

    @Test
    void contextLoads() {
        System.out.println("初始化表成功...");
    }

    @Autowired
    EmployeeDao empDao;
    @Autowired
    ProjectDao  proDap;

    @Test
    void testAddEmp(){
        Employee emp=new Employee();
        emp.setEname("王五");
        empDao.save(emp);
        Project pro=new Project();
        pro.setPname("CatWeb");
        pro.getEmployees().add(emp);
        proDap.save(pro);

    }

    @Test
    void modifyName(){
        List<Project> temp =proDap.findByPname("PetWeb");
//        System.out.println(temp);
        temp.get(0).setPname("MouseWeb");
        proDap.save(temp.get(0));
    }
}
