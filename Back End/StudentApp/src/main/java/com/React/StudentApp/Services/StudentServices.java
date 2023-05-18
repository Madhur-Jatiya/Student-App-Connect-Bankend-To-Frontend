package com.React.StudentApp.Services;

import java.util.List;
import com.React.StudentApp.Model.Student;

public interface StudentServices {
	public Student saveStudent(Student student);
	public List<Student> getAllStudents();
}
