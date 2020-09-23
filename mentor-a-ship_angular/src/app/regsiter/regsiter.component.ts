import { Component, OnInit } from '@angular/core';
import { RegisterOrUpdatesService } from './../services/register-or-updates.service';
import { Router } from '@angular/router';

export class Mentor {
  constructor(
    public name: string,
    public email: string,
    public password: string,
    public company_name: String,
    public role: string,
    public area: string,
    public expertise: string
  ) {

  }
}
@Component({
  selector: 'app-regsiter',
  templateUrl: './regsiter.component.html',
  styleUrls: ['./regsiter.component.css']
})
export class RegsiterComponent implements OnInit {
  name = ''
  email = ''
  // companyName=''
  // role=''
  // area=''
  // expertise=''
  password = ''
  repeatPassword = ''
  mentor: Mentor
  constructor(
    private router: Router,
    private registerorupdate: RegisterOrUpdatesService
  ) { }

  ngOnInit(): void {
    this.mentor = new Mentor('', '', '', '', '', '', '')
  }
  registerUser() {
    this.email = this.mentor.email;
    this.password = this.mentor.password;
    if (this.password === this.repeatPassword && this.mentor.email != '' && this.mentor.password != '' && this.mentor.name != '' && this.mentor.company_name != '' && this.mentor.role != '' && this.mentor.area != '' && this.mentor.expertise != '') {
      console.log(this.mentor)
      this.registerorupdate.mentorregister(this.mentor).subscribe(
        data => {
          console.log(data)
          this.router.navigate(['login'])
          alert('registration of mentor successful')
        }, error => {
          alert('some problm with the registration, try once with another values')
        }
      )
    }
    else {
      if (this.mentor.name === '' && this.mentor.email === '' && this.mentor.company_name === '' && this.mentor.role === '' && this.mentor.area === '' && this.mentor.expertise === '' && this.mentor.password === '') {
        alert('all field are mandatory! please fillup all th field')
      }
      else {
        if (this.password != this.repeatPassword) {
          alert('password do not match')
        }
        if (this.mentor.name === '' || this.mentor.email === '' || this.mentor.company_name === '' || this.mentor.role === '' || this.mentor.area === '' || this.mentor.expertise === '' || this.mentor.password === '') {
          alert('fillup all the fields, there are some field is empty')
        }
      }
    }

  }

}
