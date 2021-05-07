package com.example.manytomany.entity;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@ToString
@Entity(name = "t_project")
public class Project {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column
    private String pname;

    @ManyToMany()
    @JoinTable(name = "emps_pros",
            uniqueConstraints = @UniqueConstraint(columnNames = {"e_id","p_id"}),
            joinColumns = {@JoinColumn(name = "p_id",referencedColumnName = "id")},
            inverseJoinColumns = {@JoinColumn(name = "e_id",referencedColumnName = "id")}
    )
    private List<Employee> employees=new ArrayList<>();
}
