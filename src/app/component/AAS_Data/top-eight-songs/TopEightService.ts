import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {TopEightSongs} from "./TopEight"
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
@Injectable({ providedIn: 'root' })
export class TopEightSongService {
 
       // Resolve HTTP using the constructor
       constructor (private http: HttpClient) {}
       // private instance variable to hold base url
       private topEightURL = 'http://localhost:8050/user/getTopSongs/8';

 /** GET heroes from the server */
// Fetch all existing comments
getTopEightSongs() {
    return this.http.get<TopEightSongs[]>(this.topEightURL);
  }


}