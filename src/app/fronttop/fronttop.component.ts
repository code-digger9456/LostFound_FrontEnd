import { Component } from '@angular/core';

import { Router } from '@angular/router';
@Component({
  selector: 'app-fronttop',
  templateUrl: './fronttop.component.html',
  styleUrls: ['./fronttop.component.css']
})
export class FronttopComponent {

  constructor(private router: Router) { }

  home() {
    this.router.navigate(['/homepage']);
  }
  login() {
    this.router.navigate(['/loginpage']);
  }

}
