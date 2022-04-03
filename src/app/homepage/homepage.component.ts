import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

export interface PreodicElement
{
  name : string;
  position : number;

}

const ELEMENT_DATA : PreodicElement[]= 
[
   {position : 1 , name: 'Hydrogen'},
   {position : 2 , name: 'Helium'  }
];
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  constructor(private router:Router) { }

  displayedColumns : string[]=[ 'position', 'name'];
  dataSource=ELEMENT_DATA;
 
}
