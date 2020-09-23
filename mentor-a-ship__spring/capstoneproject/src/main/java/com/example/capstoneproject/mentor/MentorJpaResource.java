package com.example.capstoneproject.mentor;

import java.net.URI;
import java.util.ArrayList;
import java.util.List;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.example.capstoneproject.assosiate.Assosiate;
import com.example.capstoneproject.assosiate.AssosiateJpaRepository;
import com.example.capstoneproject.assosiate.Course;
import com.example.capstoneproject.assosiate.CourseJpaRespository;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class MentorJpaResource {

	@Autowired
	MentorJpaRepository MentorJpaservices;
	@Autowired
	AssosiateJpaRepository AssosiateJpaservices;
	@Autowired
	CourseJpaRespository courseJpaservices;
	//Can Get Its Own Details(working)
	@GetMapping(path = "/jpa/mentor/mentorCanDo/{email}")
	public Mentor getTodo( @PathVariable String email) {
		return MentorJpaservices.findById(email).get();
	}
	
	
	//fetch details of assosiate linked(working used in ui)
	@GetMapping(path="/jpa/mentorFetchAssosiates/{email}")
	public List<Assosiate> getAttachedAssociates( @PathVariable String email){
		Mentor mentor= MentorJpaservices.findById(email).get();
		List<Assosiate> list = new ArrayList<>();
		list= mentor.getAssosiates(1);
		return list;
		//return null;
	}
	
	@GetMapping(path="/jpa/mentorFetchcourses/{email}")
	public List<Course> getAttachedcourses( @PathVariable String email){
		Mentor mentor= MentorJpaservices.findById(email).get();
		List<Course> list = new ArrayList<>();
		list= mentor.getCourses();
		return list;
		//return null;
	}
	
	// edit/assign data to the trainee assosiate
	@PostMapping(path="/jpa/mentor/needToAssignDataToAssosiate/{mentoremail}/{assosiateemail}")
	public List<Assosiate> assignDataToAssosiate(@PathVariable String mentoremail,@PathVariable String assosiateemail, @RequestBody Assosiate assosiate) {
		Mentor mentor = MentorJpaservices.findById(mentoremail).get();
		List<Assosiate> assosiates = new ArrayList<>();
		Assosiate asssosiateUpdate = AssosiateJpaservices.save(assosiate);
		assosiates=mentor.getAssosiates(1);
		return assosiates;
	}
	
	//registeritselt(working)
	@PutMapping(path = "/jpa/mentor/registerItself")
	public ResponseEntity<Mentor> updateTodo(@RequestBody Mentor mentor){
		try {
			Mentor mentorexist=MentorJpaservices.findById(mentor.getEmail()).get();
			return new ResponseEntity<Mentor>(mentor, HttpStatus.CONFLICT);
		}
		catch(Exception e){
			Mentor MentorUpdate = MentorJpaservices.save(mentor);
			return new ResponseEntity<Mentor>(mentor, HttpStatus.OK);
		}
		
	}

	
    //update his details(working) 
	@PutMapping(path = "/jpa/mentor/{mentorname}/todos")
	public ResponseEntity<Mentor> createTodo(@PathVariable String mentorname, @RequestBody Mentor mentor){
		//Mentor.setName(mentorname);
		Mentor createMentor = MentorJpaservices.save(mentor);
		URI uri=ServletUriComponentsBuilder.fromCurrentRequest().path("/{email}").buildAndExpand(createMentor.getEmail()).toUri();
		return ResponseEntity.created(uri).build();
	}
	
	@GetMapping(path ="/jpa/isMentorLogin/{email}/{password}")
	public boolean isLogin(@PathVariable String email, @PathVariable String password) {
		Mentor mentor= MentorJpaservices.findById(email).get();
		return mentor.getnotPassword('a').equals(password);
    }
	//mentor assign course to assosiate
		@PostMapping(path ="/jpa/{email}/assignCourseToAssoisate")
		public int assignCourseToassoiate(@PathVariable String email, @RequestBody Course course){
			Assosiate assosiate=AssosiateJpaservices.findById(email).get();
			Mentor mentoremail=assosiate.getMentor('a');
			
			 course.setAssosiate(assosiate);
			 course.setMentorcourse(mentoremail);
			 courseJpaservices.save(course);
			 return course.getCompletion();  
		}
	
	@GetMapping(path="/jpa/fetchMentorDeskboard/{email}")
	public List<Assosiate> deskboardformentor(@PathVariable String email){
		List<String> list=new ArrayList<String>();
		Mentor mentor=MentorJpaservices.findById(email).get();
		List<Assosiate> lAss=new ArrayList<Assosiate>();
		lAss=mentor.getAssosiates(0);
		return lAss;
	}
	//edit detail of mentor(used in ui)
	@PutMapping(path = "/jpa/resetmentorpassword/{email}/{name}/{role}/{company}/{area}/{expertise}/{newPassword}")
	public ResponseEntity<Mentor> resetmentorpassword(@PathVariable String email,
			@PathVariable String name,
			@PathVariable String role,
			@PathVariable String company,
			@PathVariable String area,
			@PathVariable String expertise,
			@PathVariable String newPassword) {
		Mentor mentorexist=MentorJpaservices.findById(email).get();
		    mentorexist.setPassword(newPassword);
		    mentorexist.setName(name);
		    mentorexist.setArea(area);
		    mentorexist.setCompany_name(company);
		    mentorexist.setExpertise(expertise);
		    mentorexist.setRole(role);
		    MentorJpaservices.save(mentorexist);
			return new ResponseEntity<Mentor>(HttpStatus.OK);
	}
	
	
	//add create course
	@PutMapping(path = "/jpa/create/courses/{mentoremail}/{assosiateemail}")
	public ResponseEntity<Course> addcoursetoassosiate(@PathVariable String mentoremail,
			@PathVariable String assosiateemail,
			@RequestBody Course course) {
		Mentor mentorexist=MentorJpaservices.findById(mentoremail).get();
		Assosiate assosiateexist=AssosiateJpaservices.findById(assosiateemail).get();
            course.setMentorcourse(mentorexist);
            course.setAssosiate(assosiateexist);
            Date date=new Date();
            course.setStartdate(date);
		    courseJpaservices.save(course);
			return new ResponseEntity<Course>(HttpStatus.OK);
	}
	
}

