import { Component} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';




export interface PeriodicElement {
  name: string;
  position: number;
  amount: number;
  symbol: string;
  description: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    name: 'Pen',
     amount:1,
    symbol: '',
    description: `Found in class. Room no. 20.blue in colour`,
  },
  {
    position: 2,
    name: 'watch',
    amount: 2,
    symbol: '',
    description: `Found in ground.Metal `,
  },
  {
    position: 3,
    name: 'Bottle',
    amount: 1,
    symbol: '',
    description: `1L bottle found in common hall. Colour of bottle is green. `,
  },
  {
    position:4,
    name: 'Spectacles',
    amount: 2,
    symbol: '',
    description: `Both are frameless spectacles `,
  },
  {
    position: 5,
    name: 'ID card',
    amount: 1,
    symbol: '',
    description: `ID card found in class. 
                  Details of student:
                  Name- Aarav Gupta
                  Class- 9
                  `
  },
];

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class ListComponent  {

  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['position','name', 'amount', 'symbol'];
  expandedElement: PeriodicElement | null=null;


}
