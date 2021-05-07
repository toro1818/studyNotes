package com.example.manytomany.dao;

import com.example.manytomany.entity.Project;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProjectDao extends JpaRepository<Project,Integer> {

    List<Project> findByPname(String pname);
}
