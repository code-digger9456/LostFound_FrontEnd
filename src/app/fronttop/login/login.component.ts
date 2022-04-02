import { Component, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { RegisterComponent } from '../register/register.component';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(public dialog: MatDialog ) { }

  hide = true;

  register():void
  {
    this.dialog.open(RegisterComponent);    
  
  }
}
