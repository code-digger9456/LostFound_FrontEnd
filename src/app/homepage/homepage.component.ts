import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

export interface PreodicElement
{
  name : string;
  position : number;

}


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  constructor(private router:Router) { }

 
 
}
