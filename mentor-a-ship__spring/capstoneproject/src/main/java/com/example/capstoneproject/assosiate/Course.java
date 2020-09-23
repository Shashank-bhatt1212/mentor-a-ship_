package com.example.capstoneproject.assosiate;


import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.example.capstoneproject.mentor.Mentor;

@Entity
public class Course {
	@Id
	//@GeneratedValue
	private Long id;
	private String coursename;
	private String assesment;
	private int completion;
	private Date startdate;
	private String note;
	private String link;
	
	
	@ManyToOne
	private Assosiate assosiate;
	
	
	@ManyToOne
	private Mentor mentorcourse;
	
	
	public Mentor getMentorcourse(char a) {
		return mentorcourse;
	}
	public String getMentorcourse() {
		return mentorcourse.getEmail();
	}

	public void setMentorcourse(Mentor mentorcourse) {
		this.mentorcourse = mentorcourse;
	}
	
	public String getAssosiate() {
		return assosiate.getEmail();
	}
	
	public Assosiate getAssosiate(char a) {
		return assosiate;
	}

	public void setAssosiate(Assosiate assosiate) {
		this.assosiate = assosiate;
	}

	protected Course() {
		super();
	}
	
	public Course(Long id, String coursename, String assesment, int completion, String note, String link) {
		super();
		this.id = id;
		this.coursename = coursename;
		this.assesment = assesment;
		this.completion = completion;
		this.note = note;
		this.link = link;
	}
	public String getCoursename() {
		return coursename;
	}
	public void setCoursename(String coursename) {
		this.coursename = coursename;
	}
	public String getAssesment() {
		return assesment;
	}
	public void setAssesment(String assesment) {
		this.assesment = assesment;
	}
	public int getCompletion() {
		return completion;
	}
	public void setCompletion(int completion) {
		this.completion = completion;
	}
	public Date getStartdate() {
		return startdate;
	}
	public void setStartdate(Date startdate) {
		this.startdate = startdate;
	}
	public String getNote() {
		return note;
	}
	public void setNote(String note) {
		this.note = note;
	}
	public String getLink() {
		return link;
	}
	public void setLink(String link) {
		this.link = link;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id=id;
	}

    
	
}
