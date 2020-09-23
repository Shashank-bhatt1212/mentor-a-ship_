import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { Assosiate } from '../assosiate-register/assosiate-register.component';
export class Mentor{
  constructor(
    public name:string,
    public email:string,
    public password:string

  ){

  }
}
export class Assosiate{
  constructor(
    public name:string,
    public email:string,
    public password:string,
    public mentor:Mentor
  ){

  }
}
@Injectable({
  providedIn: 'root'
})
export class LoginservicesService {

  constructor(private http: HttpClient) { }

  Loginmentor(email,password) {
    return this.http.get<Mentor>(`http://localhost:8080/jpa/isMentorLogin/${email}/${password}`);
  }
  Loginassosiate(email,password) {
    return this.http.get<Assosiate>(`http://localhost:8080/jpa/isAssosiateLogin/${email}/${password}`);
  }
  forgetassosiate(email,newPassword,assosiate){
    return this.http.put(`http://localhost:8080/jpa/resetpassword/${email}/${newPassword}`,assosiate);
  }

  
}
