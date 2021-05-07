package com.example.onetomany.repository;

import com.example.onetomany.entity.Class;
import org.springframework.data.jpa.repository.JpaRepository;

public interface classRepository extends JpaRepository<Class,Integer> {
}
