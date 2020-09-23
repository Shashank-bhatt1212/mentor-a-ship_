import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { AssosiateMenuComponent } from './assosiate-menu/assosiate-menu.component';
import { MentorMenuComponent } from './mentor-menu/mentor-menu.component';
import { RegsiterComponent } from './regsiter/regsiter.component';
import { AssosiateDashboardComponent } from './assosiate-dashboard/assosiate-dashboard.component';
import {AssosiateRegisterComponent} from './assosiate-register/assosiate-register.component';
import {ViewUpdateTaskComponent} from './view-update-task/view-update-task.component';
import { ViewlinkforassosiateComponent } from './viewlinkforassosiate/viewlinkforassosiate.component';
import { UpdateAssosiateComponent } from './update-assosiate/update-assosiate.component';
import { MentortaskviewComponent } from './mentortaskview/mentortaskview.component';
import { MentorassosiateviewComponent } from './mentorassosiateview/mentorassosiateview.component';
import { MentorviewProfileComponent } from './mentorview-profile/mentorview-profile.component';
import { MentorEditProfileComponent } from './mentor-edit-profile/mentor-edit-profile.component';
import { AddcoursementorComponent } from './addcoursementor/addcoursementor.component';
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register',component:RegsiterComponent},
  { path: 'adminmenu', component:AdminMenuComponent},
  { path: 'assosiateDashboard/:mentoremail',component:AssosiateDashboardComponent},
  { path: 'assosiate/:assosiateemail', component:AssosiateMenuComponent},
  { path: 'viewupdatetask/:assosiateemail', component:ViewUpdateTaskComponent},
  { path: 'viewlink/:assosiateemail', component:ViewlinkforassosiateComponent},
  { path: 'assosiatedetailsupdate/:assosiateemail', component:UpdateAssosiateComponent},
  { path: 'mentormenu/:mentoremail', component:MentorMenuComponent},
  { path:'mentorassosiateView/:mentoremail',component: MentorassosiateviewComponent},
  { path:'mentorTaskView/:mentoremail',component:MentortaskviewComponent },
  { path: 'mentorViewProfile/:mentoremail',component:MentorviewProfileComponent},
  { path: 'mentorEditProfile/:mentoremail',component:MentorEditProfileComponent},
  { path: 'addcourse/:mentoremail/:assosiateemail', component:AddcoursementorComponent},
  { path: 'assosiateregister', component:AssosiateRegisterComponent},  
  { path: '**', component: LoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
