package com.example.capstoneproject.mentor;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.example.capstoneproject.assosiate.Assosiate;
import com.example.capstoneproject.assosiate.Course;

@Entity
public class Mentor {
    
	private String name;
	
	@Id
    private String email;
    private String password;
	private String company_name;
	private String role;
	private String area;
	private String expertise;
	
	@OneToMany(mappedBy="mentor", cascade = CascadeType.ALL)
	private List<Assosiate> assosiates = new ArrayList<>();
	
	@OneToMany(mappedBy="mentorcourse", cascade = CascadeType.ALL)
	private List<Course> courses= new ArrayList<>();
	
	protected Mentor() {
		super();
	}
	
	
	public Mentor(String name, String email, String password, String company_name, String role, String area, String expertise) {
		super();
		this.name = name;
		this.password=password;
		this.email = email;
		this.company_name = company_name;
		this.role = role;
		this.area = area;
		this.expertise = expertise;
	}


	public List<Course> getCourses() {
		return courses;
	}


	public void setCourses(List<Course> courses) {
		this.courses = courses;
	}
	
	public void addCourse(Course c) {
		courses.add(c);
	}
	public void removeCourse(Course c) {
		courses.remove(c);
	}


	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	
	public String getnotPassword(char a) {
		return password;
	}

	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}


	public String getCompany_name() {
		return company_name;
	}
	public void setCompany_name(String company_name) {
		this.company_name = company_name;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	public String getArea() {
		return area;
	}
	public void setArea(String area) {
		this.area = area;
	}
	public String getExpertise() {
		return expertise;
	}
	public void setExpertise(String expertise) {
		this.expertise = expertise;
	}

	public void addAssosiate(Assosiate assosiate) {
		this.assosiates.add(assosiate);
	}

	public void removeassosiate(Assosiate assosiate) {
		this.assosiates.remove(assosiate);
	}
	

	public List<Assosiate> getAssosiates(int i) {
		return assosiates;
	}

	public void setAssosiates(List<Assosiate> assosiates) {
		this.assosiates = assosiates;
	}


	


	public boolean equals(Object anObject) {
		return password.equals(anObject);
	}


	@Override
	public String toString() {
		return "Mentor will have [name=" + name + ", email=" + email + ", company_name=" + company_name + ", role=" + role
				+ ", area=" + area + ", expertise=" + expertise + "]";
	}


	
}
