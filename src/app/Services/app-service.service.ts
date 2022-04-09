import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private http: HttpClient) { }

addUserDetails(payload:any)
{
  debugger;
  return this.http.post("https://localhost:44326/api/Home",payload);

}
  getData()
  {
    return this.http.get("https://localhost:44326/api/Home");
  }



}
