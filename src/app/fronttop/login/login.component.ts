

import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppServiceService } from 'src/app/Services/app-service.service';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {



  constructor(public dialog: MatDialog,private userservices: AppServiceService) { }

  hide = true;
  register() {
    this.dialog.open(RegisterComponent);
  }

  register():void
  {
    this.dialog.open(RegisterComponent);    
  
  }
}

