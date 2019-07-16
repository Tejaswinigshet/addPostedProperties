

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable(
  {
  providedIn: 'root'
}
)
export class UserService {

   constructor(private http:HttpClient) { }

 authenticateUser(userdata:any):any{
   console.log(userdata);
   this.http.post("http://localhost:8002/api/user",userdata).subscribe(
     (user:any)=>
   {
    console.log(user);
    }
   );
   console.log(userdata);
}

registerUser(userDetails):Observable<any>{
  // console()
  console.log(userDetails);
return this.http.post("http://localhost:8090/api/v1/user",userDetails);
}

getToken(obj): any {
  console.log("get token working.. ");
  console.log(obj.emailId,obj.password);
  return this.http.post(`http://localhost:8002/api/user`,obj);
}
}
