package com.React.StudentApp.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.React.StudentApp.Model.Student;

@Repository
public interface StudentRepository extends JpaRepository<Student, Integer>{

}
