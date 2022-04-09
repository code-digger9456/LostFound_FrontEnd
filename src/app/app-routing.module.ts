import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdditemsComponent } from './additems/additems.component';
import { UserListComponent } from './Components/user-list/user-list.component';
import { LoginComponent } from './fronttop/login/login.component';
import { RegisterComponent } from './fronttop/register/register.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ListComponent } from './list/list.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  // {path :'**', component: ListComponent},

  {path : 'loginpage', component: LoginComponent },
  {path: 'register', component: RegisterComponent},
  {path: 'list' , component: AdditemsComponent },
  { path: 'test', component: TestComponent},
  {path :'userlist', component: UserListComponent},

   {path :'**', component: HomepageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
