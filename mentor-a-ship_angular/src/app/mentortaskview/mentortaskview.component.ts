import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course, DashboardForAllService } from '../services/dashboard-for-all.service';

@Component({
  selector: 'app-mentortaskview',
  templateUrl: './mentortaskview.component.html',
  styleUrls: ['./mentortaskview.component.css']
})
export class MentortaskviewComponent implements OnInit {
mentoremail=''
courselist
  constructor(
    private routers:Router,
    private router:ActivatedRoute,
    private fetechingdetailsMentor:DashboardForAllService
  ) { }

  ngOnInit(): void {
    this.mentoremail=this.router.snapshot.params['mentoremail']
    this.getTheCousesLinkTomentor()
  }
  getTheCousesLinkTomentor(){
    this.fetechingdetailsMentor.mentorCanFetchCourses(this.mentoremail).subscribe(
      data=>{
        console.log(data)
       // console.log(data.assosiate)
       this.courselist=data
      }
    )

  }
  clickforAssosiateView(){
    this.routers.navigate(['mentorassosiateView',this.mentoremail])

  }
  clickforEditProfile(){
    this.routers.navigate(['mentorEditProfile',this.mentoremail])
  }
  clickToViewProfile(){
    this.routers.navigate(['mentorViewProfile',this.mentoremail])
  }
}
