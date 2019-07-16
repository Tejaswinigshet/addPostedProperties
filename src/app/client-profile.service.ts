import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientProfileService {

  constructor(private httpClient:HttpClient) { }

  getClientData():any{
    return this.httpClient.get("http://localhost:3000/client-recommendation-details")
  
   }

   getdetails():any{
    return this.httpClient.get("http://localhost:3000/clientname")
  
  }
}
