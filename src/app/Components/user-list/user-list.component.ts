import { Component, OnInit } from '@angular/core';
import { AppServiceService } from 'src/app/Services/app-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  dataSource: any;
  displayedColumns: string[] = ['FirstName', 'Gender', 'EmailId'];

  constructor(private _userservice: AppServiceService) { }

  ngOnInit(): void {
    this._userservice.getData().subscribe(data => {
      this.dataSource = data;
    });
  }
}
