import { Component, OnInit } from '@angular/core';
import {RegisterOrUpdatesService} from './../services/register-or-updates.service';
import { Router } from '@angular/router';
import { Mentor } from '../services/loginservices.service';

export class Assosiate{
  
  constructor(
    public email:string,
  	public password:string,
    public name:string,
    public mentor:Mentor
  ){}
}

@Component({
  selector: 'app-assosiate-register',
  templateUrl: './assosiate-register.component.html',
  styleUrls: ['./assosiate-register.component.css']
})
export class AssosiateRegisterComponent implements OnInit {

  repeatPassword=''
  assosiate:Assosiate
  mentor:Mentor
  constructor( 
    private router: Router, 
    private registerorupdate : RegisterOrUpdatesService
    ) { }

  ngOnInit(): void {
        this.mentor=new Mentor('nomentor','nomentor','nomentor')
        this.assosiate=new Assosiate('','','',this.mentor)
  }
  newAssosiate(){
    if(this.repeatPassword===this.assosiate.password && this.assosiate.email!='' && this.assosiate.password!='' && this.assosiate.name){
    this.registerorupdate.assosiateregister(this.assosiate).subscribe(
      data=>{
        console.log(data)
        alert('registration successfull')
        this.router.navigate(['login'])
      },error=>{
        alert('Assosiate already exist')
      }
    )
    }
    else {
      if(this.repeatPassword!=this.assosiate.password ){
        alert('entered password do not matched with repeat password')
      }
      if(this.assosiate.name===''){
        alert('name field cannot be null! please enter it')
      }
      if(this.assosiate.password===''){
        alert('pasword field cannot be empty! please enter it')
      }
      if(this.assosiate.email===''){
        alert('email field cannot be empty! please enter it')
      }
    }
    
  }
  
}
