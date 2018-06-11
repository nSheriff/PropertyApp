import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { SignupComponent } from '../auth/signup/signup.component';
import { LoginComponent } from '../auth/login/login.component';
import { PropertyDetailComponent } from '../property/property-detail/property-detail.component';
import { MypropertyComponent } from '../property/myproperty/myproperty.component';
import { AuthGuard } from '../auth/model/auth-guard';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: 'propertydetail/:id', component: PropertyDetailComponent},
  {path: 'myproperty', component: MypropertyComponent, canActivate: [AuthGuard]}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [AuthGuard],
  declarations: []
})
export class AppRoutingModule { }
