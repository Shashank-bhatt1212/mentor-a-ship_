import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DashboardForAllService } from '../services/dashboard-for-all.service';

@Component({
  selector: 'app-mentorview-profile',
  templateUrl: './mentorview-profile.component.html',
  styleUrls: ['./mentorview-profile.component.css']
})
export class MentorviewProfileComponent implements OnInit {
  mentoremail=''
  mentor
  constructor(
    private router:ActivatedRoute,
    private routers:Router,
    private fetechingdetailsMentor:DashboardForAllService
  ) { }

  ngOnInit(): void {
    this.mentoremail=this.router.snapshot.params['mentoremail'];
    this.getTheDetailOfmentor()
  }
  getTheDetailOfmentor(){
    this.fetechingdetailsMentor.fetchMentorDetails(this.mentoremail).subscribe(
      data=>{
        //console.log(data)
        this.mentor=data
      }
    )
  }

  clickforAssosiateView(){
    this.routers.navigate(['mentorassosiateView',this.mentoremail])
  }
  clickfortaskview(){
    this.routers.navigate(['mentorTaskView',this.mentoremail])
  }
  clickforEditProfile(){
    this.routers.navigate(['mentorEditProfile',this.mentoremail])
  }

}
