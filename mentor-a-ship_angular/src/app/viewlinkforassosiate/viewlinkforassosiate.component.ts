import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DashboardForAllService } from '../services/dashboard-for-all.service';

export class Course {
  constructor(
    public id,
    public coursename:string,
    public assesment:string,
    public completion,
    public startdate:Date,
    public note:string,
    public link:string,
    public assosiate:string,
    public mentorcourse:string
  ) {

  }
}
@Component({
  selector: 'app-viewlinkforassosiate',
  templateUrl: './viewlinkforassosiate.component.html',
  styleUrls: ['./viewlinkforassosiate.component.css']
})
export class ViewlinkforassosiateComponent implements OnInit {

  email=''
  courseslist
  constructor(
    private router:ActivatedRoute,
    private dashboardservices: DashboardForAllService,
    private routers:Router
  ) { }

  ngOnInit(): void {
    this.email = this.router.snapshot.params['assosiateemail'];
    this.getallcourseLinkedWithassosiate();
  }

  getallcourseLinkedWithassosiate(){
    this.dashboardservices.fetchAssosiateCourses(this.email).subscribe(
      coursedata=>{
        console.log(coursedata);
        this.courseslist=coursedata;
      }
    )
    }
    updatecourse(id,completion,course){
     //console.log(email);
     //console.log(completion)
     //console.log(course)
     this.dashboardservices.updateCourse(id,completion,course).subscribe(
       data=>{
         //console.log(data)
         alert('percentage updated succesfully')
       }
     )
  
    }
    redirectToChangePassword(){
      this.routers.navigate(['assosiatedetailsupdate',this.email])
     }
     editprofileAssosiate(){
      this.routers.navigate(['assosiate',this.email])
     }
     viewupdatetasklink(){
      this.routers.navigate(['viewupdatetask',this.email])
     }
     linkForMentorDetails(){
      this.routers.navigate(['assosiateDashboard',this.email])
    }
}
