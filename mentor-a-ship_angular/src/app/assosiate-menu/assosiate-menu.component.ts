import { Component, OnInit } from '@angular/core';
import {DashboardForAllService} from './../services/dashboard-for-all.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-assosiate-menu',
  templateUrl: './assosiate-menu.component.html',
  styleUrls: ['./assosiate-menu.component.css']
})
export class AssosiateMenuComponent implements OnInit {
  assosiatename=''
  assosiateemail=''
  constructor(
    private router:ActivatedRoute,
    private DashboardForAllService : DashboardForAllService,
    private routers:Router

  ) { }

  ngOnInit(): void {
    this.assosiateemail=this.router.snapshot.params['assosiateemail'];
    this.getAssosiateDetails();
  }

  getAssosiateDetails(){
     console.log(this.DashboardForAllService.fetchAssosiateDetails(this.assosiateemail));
      this.DashboardForAllService.fetchAssosiateDetails(this.assosiateemail).subscribe(
        response => this.handleSuccessfulResponse(response),
        error => this.handleErrorResponse(error)
       );
   }
   handleSuccessfulResponse(response){
     //this.DashboardForAllService = response.message
      console.log(response);
      this.assosiatename=response.name;
     // console.log(response.message);
   }
 
   handleErrorResponse(error) {
     console.log(error);
     //console.log(error.error);
     //console.log(error.error.message);
    // this.DashboardForAllService = error.error.message
   }
   redirectToChangePassword(){
    this.routers.navigate(['assosiatedetailsupdate',this.assosiateemail])
   }
   editprofileAssosiate(){
    this.routers.navigate(['assosiate',this.assosiateemail])
   }
  viewupdatetasklink(){
    this.routers.navigate(['viewupdatetask',this.assosiateemail])
  }
  linksforhelpLink(){
    this.routers.navigate(['viewlink',this.assosiateemail])
  }
  linkForMentorDetails(){
    this.routers.navigate(['assosiateDashboard',this.assosiateemail])
  }

}
