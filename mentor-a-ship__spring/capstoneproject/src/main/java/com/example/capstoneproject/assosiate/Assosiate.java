package com.example.capstoneproject.assosiate;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import org.hibernate.annotations.NotFoundAction;

import com.example.capstoneproject.mentor.Mentor;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;


@JsonIgnoreProperties(ignoreUnknown = true)
@Entity
public class Assosiate {


	@Id
	private String email;
	
	private String password;
	private String name;

	@OneToMany(mappedBy="assosiate",cascade = CascadeType.ALL)
	private List<Course> courses = new ArrayList<>();
    
	@ManyToOne
	private Mentor mentor;
	
	protected Assosiate() {
		super();
	}

	public Assosiate(String name, String email,String password) {
		super();
		this.name = name;
        this.password=password;
		this.email = email;

	}

	public List<Course> getCourses() {
		return courses;
	}

	public void setCourses(List<Course> courses) {
		this.courses = courses;
	}

	public void addCourses(Course course) {
		 courses.add(course);
	}

	public void removeCourses(Course course) {
		courses.remove(course);
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

	public Mentor getMentor(int i) {
		return mentor;
	}
	
	public String getMentor() {
		return mentor.getEmail();
	}
	
	public void setMentor(Mentor mentor) {
		this.mentor = mentor;
	}
	@Override
	public String toString() {
		return "Assosiate [email=" + email + ", name=" + name + "]";
	}	
}
