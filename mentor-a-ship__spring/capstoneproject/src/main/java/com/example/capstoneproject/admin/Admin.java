package com.example.capstoneproject.admin;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Admin {

	@Id
	private String email;
    private String password;
	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	protected Admin() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Admin(String email,String password) {
		super();
		this.email = email;
		this.password=password;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	@Override
	public String toString() {
		return "Admin [email=" + email + "]";
	}
	
}
