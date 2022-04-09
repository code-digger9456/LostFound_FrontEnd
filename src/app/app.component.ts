import { Component, OnInit } from '@angular/core';
import { AppServiceService } from './Services/app-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  title = 'project';
  
  constructor(private service :AppServiceService) { }
  // ngOnInit(): void {
    
  //   this.getDataFromAPI();
  // }

  // getDataFromAPI()
  // {
  //     this.service.getData().subscribe((Response) =>{ 
  //     console.log('Resopnse of api',Response)
  //     },
  //     (error) =>
  //     {
  //       console.log('Error',error);
  //     })

    
  // }

}
