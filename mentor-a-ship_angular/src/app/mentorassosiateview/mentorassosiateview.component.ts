import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course, DashboardForAllService } from '../services/dashboard-for-all.service';

@Component({
  selector: 'app-mentorassosiateview',
  templateUrl: './mentorassosiateview.component.html',
  styleUrls: ['./mentorassosiateview.component.css']
})
export class MentorassosiateviewComponent implements OnInit {
mentoremail=''
assosiatelist
courseslist:Course[]
  constructor(
    private routers:Router,
    private router:ActivatedRoute,
    private fetechingdetailsMentor:DashboardForAllService
  ) { }

  ngOnInit(): void {
    this.mentoremail=this.router.snapshot.params['mentoremail']
    this.fetchallassosiate()
  }

  fetchallassosiate(){
    this.fetechingdetailsMentor.mentorCanFetchAssosiates(this.mentoremail).subscribe(
      data=>{
      //console.log(data)
      this.assosiatelist=data
      }
      
    )

  }

  addCourse(mentoremail,assosiateemail){
    //this.routers.navigate(['mentorTaskView',this.mentoremail])
  //  console.log([assosiateemail,mentoremail])
    this.routers.navigate(['addcourse',mentoremail,assosiateemail])
  }
  clickfortaskview(){
    this.routers.navigate(['mentorTaskView',this.mentoremail])
  }
  clickforEditProfile(){
    this.routers.navigate(['mentorEditProfile',this.mentoremail])
  }
  clickToViewProfile(){
    this.routers.navigate(['mentorViewProfile',this.mentoremail])
  }
}
