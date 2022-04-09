import { Component, Inject } from '@angular/core';
import {MatDialog,MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AppServiceService } from 'src/app/Services/app-service.service';
import { FormBuilder,Validators } from '@angular/forms';
import { UserForm } from 'src/app/Modals/UserForm';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {


  constructor(@Inject(MAT_DIALOG_DATA) public dialog: MatDialog ,
                private userservice:AppServiceService,
                private fb :FormBuilder

  ) { }
 
 payload: UserForm = new UserForm;
 hide=true;


 userForm = this.fb.group({
  firstName: ['',Validators.required],
  lastName: [''],
  gender:['',Validators.required],
  email:[''],
  phone:[''],  
  address: [''],
  password:['',Validators.required],
  SecurityQuestion:['']
});


onSubmit(){
  this.payload.FirstName=this.userForm.get('firstName')?.value;
  this.payload.LastName=this.userForm.get('lastName')?.value;
  this.payload.Gender=this.userForm.get('gender')?.value;
  this.payload.EmailId=this.userForm.get('email')?.value;
  this.payload.Phone=this.userForm.get('phone')?.value;
  this.payload.Address=this.userForm.get('address')?.value;
  this.payload.Password=this.userForm.get('password')?.value;
  this.payload.SecurityQuestion=this.userForm.get('SecurityQuestion')?.value;
  console.log(this.payload);
    this.userservice.addUserDetails(this.payload).subscribe(data=>console.log(data));

  }
}
