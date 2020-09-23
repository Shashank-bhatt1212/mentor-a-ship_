import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterOrUpdatesService {

  constructor(private http: HttpClient) { }

  mentorupdate(email,name,role,company,area,expertise,newPassword,mentor){
    return this.http.put(`http://localhost:8080/jpa/resetmentorpassword/${email}/${name}/${role}/${company}/${area}/${expertise}/${newPassword}`,mentor);

  }
  mentorregister(mentor){
    return this.http.put(`http://localhost:8080/jpa/mentor/registerItself`, mentor);

  }
  assosiateupdate(assosiate){
    return this.http.put(`http://localhost:8080/jpa/assosiate/assosiateCanDo`,assosiate);
  }
  assosiateregister(assosiate){
    return this.http.put(`http://localhost:8080/jpa/assosiate/canRegister`, assosiate);
  }
}
