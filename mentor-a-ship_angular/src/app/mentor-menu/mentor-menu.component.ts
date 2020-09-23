import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DashboardForAllService } from '../services/dashboard-for-all.service';

@Component({
  selector: 'app-mentor-menu',
  templateUrl: './mentor-menu.component.html',
  styleUrls: ['./mentor-menu.component.css']
})
export class MentorMenuComponent implements OnInit {
mentoremail=''
mentor
  constructor(
    private routers:Router,
    private router:ActivatedRoute,
    private fetechingdetailsMentor:DashboardForAllService
  ) { }
 
  ngOnInit(): void {
    this.mentoremail=this.router.snapshot.params['mentoremail'];
    this.getTheCousesLinkTomentor()
  }

  getTheCousesLinkTomentor(){
    this.fetechingdetailsMentor.fetchMentorDetails(this.mentoremail).subscribe(
      data=>{
        console.log(data)
       // console.log(data.assosiate)
       this.mentor=data
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
  clickforEditProfile(){
    this.routers.navigate(['mentorEditProfile',this.mentoremail])
  }
}