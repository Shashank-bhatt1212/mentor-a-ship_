import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { MentorMenuComponent } from './mentor-menu/mentor-menu.component';
import { AssosiateMenuComponent } from './assosiate-menu/assosiate-menu.component';
import { FooterforallpageComponent } from './footerforallpage/footerforallpage.component';
import { MentorheaderComponent } from './mentorheader/mentorheader.component';
import { AdminheaderComponent } from './adminheader/adminheader.component';
//import { AssosiateheaderComponent } from './assosiateheader/assosiateheader.component';
import { RegsiterComponent } from './regsiter/regsiter.component';
import { AssosiateDashboardComponent } from './assosiate-dashboard/assosiate-dashboard.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AssosiateRegisterComponent } from './assosiate-register/assosiate-register.component';
import { ViewUpdateTaskComponent } from './view-update-task/view-update-task.component';
import { ViewlinkforassosiateComponent } from './viewlinkforassosiate/viewlinkforassosiate.component';
import { UpdateAssosiateComponent } from './update-assosiate/update-assosiate.component';
import { MentorassosiateviewComponent } from './mentorassosiateview/mentorassosiateview.component';
import { MentortaskviewComponent } from './mentortaskview/mentortaskview.component';
import { MentorviewProfileComponent } from './mentorview-profile/mentorview-profile.component';
import { MentorEditProfileComponent } from './mentor-edit-profile/mentor-edit-profile.component';
import { AddcoursementorComponent } from './addcoursementor/addcoursementor.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminMenuComponent,
    MentorMenuComponent,
    AssosiateMenuComponent,
    FooterforallpageComponent,
    MentorheaderComponent,
    AdminheaderComponent,
    RegsiterComponent,
    AssosiateDashboardComponent,
    AssosiateRegisterComponent,
    ViewUpdateTaskComponent,
    ViewlinkforassosiateComponent,
    UpdateAssosiateComponent,
    MentorassosiateviewComponent,
    MentortaskviewComponent,
    MentorviewProfileComponent,
    MentorEditProfileComponent,
    AddcoursementorComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    FormsModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
