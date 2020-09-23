import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DashboardForAllService } from '../services/dashboard-for-all.service';
import { Mentor } from '../services/dashboard-for-all.service';
import { RegisterOrUpdatesService } from '../services/register-or-updates.service';

@Component({
  selector: 'app-mentor-edit-profile',
  templateUrl: './mentor-edit-profile.component.html',
  styleUrls: ['./mentor-edit-profile.component.css']
})
export class MentorEditProfileComponent implements OnInit {
  mentoremail=''
  mentor:Mentor
  constructor(
    private router:ActivatedRoute,
    private routers:Router,
    private fetchmentroservices: DashboardForAllService,
    private serviceforupdate:RegisterOrUpdatesService

  ) { }

  ngOnInit(): void {
    this.mentoremail=this.router.snapshot.params['mentoremail'];
    this.getMentor();
  }
  getMentor(){
    console.log(this.mentoremail)
    this.fetchmentroservices.fetchMentorDetails(this.mentoremail).subscribe(
      data=>{
        this.mentor=data
        console.log(data);
      }
    )

  }
  updatementor(name,role,company,area,expertise,newpassword,mentor){
    //console.log(mentor)
    this.serviceforupdate.mentorupdate(this.mentoremail,name,role,company,area,expertise,newpassword,mentor).subscribe(
      data=>{
        console.log(data)
        alert('details updated')
      }
    )
  }
  clickToViewProfile(){
    this.routers.navigate(['mentorViewProfile',this.mentoremail])
  }
  clickforAssosiateView(){
    this.routers.navigate(['mentorassosiateView',this.mentoremail])
  }
  clickfortaskview(){
    this.routers.navigate(['mentorTaskView',this.mentoremail])
  }
}
