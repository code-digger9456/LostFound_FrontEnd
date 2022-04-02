import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdditemsComponent } from './additems/additems.component';
import { LoginComponent } from './fronttop/login/login.component';
import { RegisterComponent } from './fronttop/register/register.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {path : 'loginpage', component: LoginComponent },
  {path: 'registration', component: RegisterComponent},
  {path: 'list' , component: AdditemsComponent },
  { path: 'test', component: TestComponent},
  {path :'**', component: HomepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
