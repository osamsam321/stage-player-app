import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UserLoginDetails } from "./UserLoginDetails";

@Injectable({ providedIn: 'root'})
export class LoginService {
     
    constructor(private http: HttpClient) {
    }
      
    login(userLoginDetails: UserLoginDetails) {
        //const body=JSON.stringify(userLoginDetails) when using json
        let body = new FormData();
        body.append('username', userLoginDetails.username);
        body.append('password', userLoginDetails.password);
       let url = 'http://localhost:8090/api/login';
       console.log("body: " + body);
        return this.http.post<UserLoginDetails>(url, body);
            // this is just the HTTP call, 
            // we still need to handle the reception of the token
            // .shareReplay();
            
    }
}