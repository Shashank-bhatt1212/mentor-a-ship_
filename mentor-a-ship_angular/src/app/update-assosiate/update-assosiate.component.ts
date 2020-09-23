import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Assosiate } from '../services/loginservices.service';
import { DashboardForAllService } from '../services/dashboard-for-all.service';
import { LoginservicesService, Mentor } from '../services/loginservices.service';
import { RegisterOrUpdatesService } from '../services/register-or-updates.service';

@Component({
  selector: 'app-update-assosiate',
  templateUrl: './update-assosiate.component.html',
  styleUrls: ['./update-assosiate.component.css']
})
export class UpdateAssosiateComponent implements OnInit {
  email=''
  courseslist
  assosiate
  mentor
  constructor(
    private router:ActivatedRoute,
    private dashboardservices: DashboardForAllService,
    private registerorupdate:RegisterOrUpdatesService,
    private routers:Router,
    private loginservices: LoginservicesService

  ) { }

  ngOnInit(): void {
    this.email = this.router.snapshot.params['assosiateemail'];
   // this.mentor= new Mentor('','')
   // this.assosiate=new Assosiate('','','',null)
   // this.getallcourseLinkedWithassosiate();
    this.getdetailsassosiate();
  }
  changepasswordassosiate(email,password){
    this.loginservices.forgetassosiate(email,password,this.assosiate).subscribe(
      data=>{
        //console.log(data)
        alert('password updated successfully')
      }
    )
  }
  getdetailsassosiate(){
    this.dashboardservices.fetchAssosiateDetails(this.email).subscribe(
      data=>{
        console.log(data)
       this.assosiate=data
      }
    )
  }
  updateDetails(){
    this.registerorupdate.assosiateupdate(this.assosiate).subscribe(
      data=>{

      //  console.log(data);
      }
    )
  }
  
   
    editprofileAssosiate(){
      this.routers.navigate(['assosiate',this.email])
     }
     linkForMentorDetails(){
      this.routers.navigate(['assosiateDashboard',this.email])
    }

}
