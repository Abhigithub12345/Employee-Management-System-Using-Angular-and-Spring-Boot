package com.demo.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.entity.Employee;
import com.demo.exception.ResourceNotFoundException;
import com.demo.repository.EmployeeRepository;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")  // this is most important annotation to get different http request.
public class EmployeeController
{
	@Autowired
	private EmployeeRepository employeeRepository;
	
	
	// get all the employees.
	@GetMapping("/employees")
	public List<Employee> getAllEmployees()
	{
		return employeeRepository.findAll();
	}
	
	
	// create an employee.
	@PostMapping("/employees")
	public Employee createEmployee(@RequestBody Employee emp)
	{
		return employeeRepository.save(emp);
	}
	
	
	//get employee by id.
	@GetMapping("/employees/{id}")
	public ResponseEntity<Employee> getEmployeeById(@PathVariable long id) 
	{
		 Employee employee = employeeRepository.findById(id)
			.orElseThrow(()-> new ResourceNotFoundException("Employee not exits with id : " + id));
		 return ResponseEntity.ok(employee);
	}
	
	
	// update employee
	@PutMapping("/employees/{id}")
	public ResponseEntity<Employee> updateEmployee(@PathVariable long id, @RequestBody Employee emp){
		 Employee employee = employeeRepository.findById(id)
					.orElseThrow(()-> new ResourceNotFoundException("Employee not exits with id : " + id));
		 
		employee.setFirstName(emp.getFirstName());
		employee.setLastName(emp.getLastName());
		employee.setSalary(emp.getSalary());
		
		Employee updatedEmp = employeeRepository.save(employee);
		return ResponseEntity.ok(updatedEmp);
	}
	
	// delete employee
	@DeleteMapping("/employees/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable long id){
		 Employee employee = employeeRepository.findById(id)
					.orElseThrow(()-> new ResourceNotFoundException("Employee not exits with id : " + id));
		 employeeRepository.delete(employee);
		 Map<String, Boolean> response = new HashMap<>();
		 response.put("deleted", Boolean.TRUE);
		 
		 return ResponseEntity.ok(response);
		
	}

}
