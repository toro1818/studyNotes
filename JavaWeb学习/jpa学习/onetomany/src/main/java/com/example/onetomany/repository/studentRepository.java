package com.example.onetomany.repository;

import com.example.onetomany.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface studentRepository extends JpaRepository<Student,Integer> {
}
