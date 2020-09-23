import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DashboardForAllService } from '../services/dashboard-for-all.service';
import { RegisterOrUpdatesService } from '../services/register-or-updates.service';

export class Course {
  constructor(
    public id,
    public coursename:string,
    public assesment:string,
    public completion,
    public startdate:Date,
    public note:string,
    public link:string
  ) {
  }
}
@Component({
  selector: 'app-addcoursementor',
  templateUrl: './addcoursementor.component.html',
  styleUrls: ['./addcoursementor.component.css']
})
export class AddcoursementorComponent implements OnInit {
  mentoremail=''
  assosiateemail=''
  course:Course
  constructor(
    private router:ActivatedRoute,
    private routers:Router,
    private fetchmentroservices: DashboardForAllService,
    private serviceforupdate:RegisterOrUpdatesService
  ) { }
  ngOnInit( ): void {
    //addcourse/:mentoremail/:assosiateemail
   this.course= new Course(0,'','','',null,'','');
   this.mentoremail= this.router.snapshot.params['mentoremail'];
   this.assosiateemail= this.router.snapshot.params['assosiateemail'];
  }
  backtoAssosiateviewmentor(course){
   // console.log(course)
    this.fetchmentroservices.addcourse(this.mentoremail,this.assosiateemail,course).subscribe(
      data=>{
        //console.log(data)
        alert(['congratulation',this.mentoremail,'successfully addcourse to ',this.assosiateemail])
        this.routers.navigate(['mentorassosiateView',this.mentoremail])
      }
    )    
   // this.routers.navigate(['mentorassosiateView',this.mentoremail])
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
  clickforAssosiateView(){
    this.routers.navigate(['mentorassosiateView',this.mentoremail])
  }
}
