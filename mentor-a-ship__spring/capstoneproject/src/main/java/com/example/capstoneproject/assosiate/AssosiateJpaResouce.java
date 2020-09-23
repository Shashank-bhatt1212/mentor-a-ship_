package com.example.capstoneproject.assosiate;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.example.capstoneproject.mentor.Mentor;
import com.example.capstoneproject.mentor.MentorJpaRepository;
import com.example.capstoneproject.mentor.MentorJpaResource;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class AssosiateJpaResouce {

	@Autowired
	AssosiateJpaRepository AssosiateJpaservices;

	@Autowired
	CourseJpaRespository courseJpaservices;
	
	@Autowired
	MentorJpaRepository mentorJpaservices;
	
	//Can Get Its Own Details
	@GetMapping(path = "/jpa/assosiate/assosiateCanDo/{email}")
	public Assosiate getTodo( @PathVariable String email) {
		return AssosiateJpaservices.findById(email).get();
	}
	
	//get Details of mentor
	@GetMapping(path= "/jpa/assosiate/fetchMentorDetails/{email}")
	public Mentor getmentordetails( @PathVariable String email) {
		Assosiate assosiate=AssosiateJpaservices.findById(email).get();
		return assosiate.getMentor(1);
	}
	
	
	@PostMapping(path = "/jpa/assosiate/canRegister1")
	public ResponseEntity<Assosiate> createAssosiate1(@RequestBody Assosiate assosiate){
		try {
		Assosiate assosiateexist= AssosiateJpaservices.findById(assosiate.getEmail()).get();
		return new ResponseEntity<Assosiate>(assosiate, HttpStatus.CONFLICT);
		}
		catch(Exception e) {
		Assosiate AssosiateUpdate = AssosiateJpaservices.save(assosiate);
		return new ResponseEntity<Assosiate>(assosiate, HttpStatus.OK);
		}	
	}
	
	//registerassosiate
	@PutMapping(path = "/jpa/assosiate/canRegister")
	public ResponseEntity<Assosiate> createAssosiate(@RequestBody Assosiate assosiate){
		try {
		Assosiate assosiateexist= AssosiateJpaservices.findById(assosiate.getEmail()).get();
		return new ResponseEntity<Assosiate>(assosiate, HttpStatus.CONFLICT);
		}
		catch(Exception e) {
		Assosiate AssosiateUpdate = AssosiateJpaservices.save(assosiate);
		return new ResponseEntity<Assosiate>(assosiate, HttpStatus.OK);
		}	
	}
    //updatehisprofile
	@PutMapping(path = "/jpa/assosiate/assosiateCanDo")
	public ResponseEntity<Assosiate> createTodo(@RequestBody Assosiate assosiate){
		//Assosiate.setName(assosiatename);
		Assosiate createAssosiate = AssosiateJpaservices.save(assosiate);
//		URI uri=ServletUriComponentsBuilder.fromCurrentRequest().path("/{email}").buildAndExpand(createAssosiate.getEmail()).toUri();
//		return ResponseEntity.created(uri).build();
		return new ResponseEntity<Assosiate>(assosiate, HttpStatus.OK);

	}
	
	@GetMapping(path ="/jpa/{email}/assosiateWithAll")
	public List<Course> findAllCoursesWithAssosiate(@PathVariable String email){
		Assosiate assosiate=AssosiateJpaservices.findById(email).get();
		return assosiate.getCourses();
		//return null;
	}
	//courseupdate
	@PutMapping(path ="/jpa/courseupdate/{id}/{percentage}")
	public ResponseEntity<Course> findAllCoursesWithAssosiate(@PathVariable Long id, @PathVariable int percentage ){
		Course course=courseJpaservices.findById(id).get();
		course.setCompletion(percentage);
		courseJpaservices.save(course);
		return new ResponseEntity<Course>(course,HttpStatus.OK);
	}
	
	//reseting password assosiate
	@PutMapping(path = "/jpa/resetpassword/{email}/{newPassword}")
	public ResponseEntity<Assosiate> resetpassword(@PathVariable String email, @PathVariable String newPassword) {
		Assosiate assosiateexist=AssosiateJpaservices.findById(email).get();
		    assosiateexist.setPassword(newPassword);
			AssosiateJpaservices.save(assosiateexist);
			return new ResponseEntity<Assosiate>(HttpStatus.OK);
		

		
	}
	//loginforassosiate
	@GetMapping(path ="/jpa/isAssosiateLogin/{email}/{password}")
	public boolean isLogin(@PathVariable String email, @PathVariable String password) {
		Assosiate mentor= AssosiateJpaservices.findById(email).get();
		return mentor.getnotPassword('a').equals(password);
    }
}
	
	
