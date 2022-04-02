import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fronttop',
  templateUrl: './fronttop.component.html',
  styleUrls: ['./fronttop.component.css']
})
export class FronttopComponent {

  
  constructor(private router: Router,public dialog: MatDialog) { }

  home() {
    this.router.navigate(['/homepage']);
  }

  login() {
    console.log('testing');
  }

}
