import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { TopEightSongs } from "./TopEightSongs";

@Injectable({ providedIn: 'root' })
export class TopEightSongService {
 
       // Resolve HTTP using the constructor
       constructor (private http: HttpClient) {}
       
       // private instance variable to hold base url
       private topEightURL = 'http://localhost:8050/user/getTopSongs/8';

 
getTopEightSongs() {
    return this.http.get<TopEightSongs[]>(this.topEightURL);
  }


}