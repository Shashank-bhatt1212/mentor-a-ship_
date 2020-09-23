import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {LoginservicesService} from './../services/loginservices.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email=''
  password=''
  mentor=''
  assosiate=''
  admin=''

  constructor(
    private router: Router,
    private activaterouter:ActivatedRoute,
  private loginService:  LoginservicesService
    ) { }

  ngOnInit(): void {
    
  }
  loginUser(){

    console.log([this.mentor,this.admin,this.assosiate]);
    
    if(this.mentor===''&&this.admin===''&&this.assosiate===''){
    alert('choose one of the user from mentor, assosiate or admin')
    
    }
    if(this.email===''||this.password===''){
      alert('email or password field can not be empty please fill both of them')
    }

    
     if(this.mentor==='mentor'&&this.admin===''&&this.assosiate===''&& this.email!=''&& this.password!=''){
       console.log(this.mentor)
       this.mentor=''
       this.loginService.Loginmentor(this.email,this.password).subscribe(
         mentorresponse=>{
           console.log(mentorresponse)
           this.router.navigate(['mentormenu',this.email])
         },
         error=>{
           alert('invalid credentials, click ok then then enter again')
         }

       )
    }

    if(this.mentor===''&&this.assosiate=='assosiate'&&this.admin===''&& this.email!=''&& this.password!=''){
      console.log(this.assosiate)
      this.assosiate=''

      this.loginService.Loginassosiate(this.email,this.password).subscribe(
        assosiateresponse=>{
          console.log(this.assosiate)
          this.router.navigate(['assosiate',this.email])
        },
        error=>{
          alert('invalid credentials, click ok then then enter again')
        }
      )
    }


    if(this.admin==='admin'&&this.assosiate===''&&this.mentor==='' && this.email!=''&& this.password!=''){
      console.log(this.admin)
      this.admin=''
      this.router.navigate(['adminmenu'])
    }

  }
  loginSuccessfulResponse(response){
  console.log(response);
  
  }
  loginErrorResponse(error){
  console.log(error);
  }
}
