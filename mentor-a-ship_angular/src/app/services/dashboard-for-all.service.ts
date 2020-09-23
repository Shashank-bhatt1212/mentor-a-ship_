import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class Mentor {
  constructor(
    public name: string,
    public email: string,
    public company_name: String,
    public role: string,
    public area: string,
    public expertise: string,
    public courses:Course,
    public password:string
  ) {

  }
}
export class Assosiate {
  constructor(
    public email: string,
    public name: string,
    public password:string
  ) {

  }
}
export class Course {
  constructor(
    public id,
    public coursename:string,
    public assesment:string,
    public completion,
    public startdate:Date,
    public note:string,
    public link:string,
    public assosiate:string


  ) {

  }
}
@Injectable({
  providedIn: 'root'
})
export class DashboardForAllService {

  constructor(private http: HttpClient) { }

  fetchMentorDetails(email) {
    return this.http.get<Mentor>(`http://localhost:8080/jpa/mentor/mentorCanDo/${email}`);
    //console.log("Execute dashboard for all ");
  }
  fetchAssosiateDetails(email) {
    return this.http.get<Assosiate>(`http://localhost:8080/jpa/assosiate/assosiateCanDo/${email}`);
  }
  fetchAssosiateCourses(email) {
    return this.http.get<Course>(`http://localhost:8080/jpa/${email}/assosiateWithAll`);
  }
  updateCourse(id, percentage,course){
    return this.http.put(`http://localhost:8080/jpa/courseupdate/${id}/${percentage}`,course);
  }
  assosiateCanFetchMentorDetails(email){
    return this.http.get<Mentor>(`http://localhost:8080/jpa/assosiate/fetchMentorDetails/${email}`)
  }
  mentorCanFetchAssosiates(email){
    return this.http.get<Assosiate>(`http://localhost:8080/jpa/mentorFetchAssosiates/${email}`)
  }
  mentorCanFetchCourses(email){
    return this.http.get<Course>(`http://localhost:8080/jpa/mentorFetchcourses/${email}`)
  }
  addcourse(mentoremail,assosiateemail,course){
    return this.http.put(`http://localhost:8080/jpa/create/courses/${mentoremail}/${assosiateemail}`,course);
  }
}
