import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})



export class OwnerDashboardService {
  public space;
  public rm:number;
 // public counter = 0;

  constructor(private httpClient:HttpClient) { }

  getOwnerData():any{
    return this.httpClient.get("http://localhost:3000/Owner-Details")
  }

  getSpaceData():any{
    return this.httpClient.get("http://localhost:3000/Space-Details");
  }

 
    getSpaceByName(value):Observable<any>{
      console.log(value);
      //this.rm=id;
      return this.httpClient.get<any>(`http://localhost:8090/api/v1/${value}`);
     }

     searchByName(value):Observable<any>{
       console.log(value);
       return this.httpClient.get<any>(`http://localhost:8090/api/v1/user/${value}`)
     }
}

