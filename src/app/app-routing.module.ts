import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdditemsComponent } from './additems/additems.component';
import { LoginComponent } from './fronttop/login/login.component';
import { RegisterComponent } from './fronttop/register/register.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TestComponent } from './test/test.component';
// import { Test1Component } from './test1/test1.component';

const routes: Routes = [
   
  {path : 'login page', component: LoginComponent },
  {path :'home page', component: HomepageComponent},
  {path: 'registration page', component: RegisterComponent},
  // {path: 'test1', component: Test1Component},
  {path: 'list' , component: AdditemsComponent },
  { path: 'test', component: TestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
