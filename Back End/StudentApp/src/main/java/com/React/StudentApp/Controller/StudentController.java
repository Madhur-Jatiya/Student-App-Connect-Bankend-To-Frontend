package com.React.StudentApp.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.React.StudentApp.Model.Student;
import com.React.StudentApp.Services.StudentServices;

@RestController
@RequestMapping("/student")
@CrossOrigin
public class StudentController {
	@Autowired
	private StudentServices studentServices;

	@PostMapping("/add")
	public String addStudents(@RequestBody Student student) {
		studentServices.saveStudent(student);
		return "Student Added Successfully";
	}
	
	@GetMapping("/getall")
	public List<Student> getAllStudents()
	{
		return studentServices.getAllStudents();
	}
}
