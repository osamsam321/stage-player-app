import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {HttpClient} from '@angular/common/http';
import {TopEight} from "./TopEight"
 
@Injectable({ providedIn: 'root' })
export class HeroService {
 
       // Resolve HTTP using the constructor
       constructor (private http: Http) {}
       // private instance variable to hold base url
       private topEightURL = 'http://localhost:8050/user/getTopSongs/8';

 /** GET heroes from the server */
// Fetch all existing comments
getTopEight() : Observable<TopEight[]> {

    // ...using get request
    return this.http.get(this.commentsUrl)
                   // ...and calling .json() on the response to return data
                    .map((res:Response) => res.json())
                    //...errors if any
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

}
}