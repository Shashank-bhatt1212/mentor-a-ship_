import { Component, OnInit } from '@angular/core';
import {DashboardForAllService} from './../services/dashboard-for-all.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-assosiate-dashboard',
  templateUrl: './assosiate-dashboard.component.html',
  styleUrls: ['./assosiate-dashboard.component.css']
})
export class AssosiateDashboardComponent implements OnInit {
  mentorname=''
  mentoremail=''
  mentorCompanyName=''
  mentorRole= ''
  mentorArea= ''
  MentorExpertise=''
  
  constructor(
    private router:ActivatedRoute,
    private DashboardForAllService : DashboardForAllService,
    private routers:Router
  ) { }

  ngOnInit(): void {
   this.mentoremail=this.router.snapshot.params['mentoremail'];
   this.assosiateCanFetchMentorDetailsfunction();
  }

  assosiateCanFetchMentorDetailsfunction(){
   // console.log(this.mentoremail);
   // console.log(this.DashboardForAllService.assosiateCanFetchMentorDetails(this.mentoremail));
     this.DashboardForAllService.assosiateCanFetchMentorDetails(this.mentoremail).subscribe(
       response => this.handleSuccessfulResponse(response),
       error => this.handleErrorResponse(error)
      );
  }
  handleSuccessfulResponse(response){
    //this.DashboardForAllService = response.message
    // console.log(response);
     this.mentorname=response.name;
     this.mentorCompanyName=response.company_name;
     this.mentorRole=response.name;
     this.mentorArea=response.area;
     this.MentorExpertise=response.expertise;
    // console.log(response.message);
  }

  handleErrorResponse(error) {
  //  console.log(error);
    //console.log(error.error);
    //console.log(error.error.message);
   // this.DashboardForAllService = error.error.message
  }
  redirectToChangePassword(){
    this.routers.navigate(['assosiatepasswordchange',this.mentoremail])
   }
   editprofileAssosiate(){
    this.routers.navigate(['assosiate',this.mentoremail])
   }
  viewupdatetasklink(){
    this.routers.navigate(['viewupdatetask',this.mentoremail])
  }
  linksforhelpLink(){
    this.routers.navigate(['viewlink',this.mentoremail])
  }
}
