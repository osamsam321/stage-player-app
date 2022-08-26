import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { PlayAudio } from "./PlayAudio";


@Injectable({ providedIn: 'root' })
export class PlayAudioService {
 
       // Resolve HTTP using the constructor
       constructor (private http: HttpClient) {}
       
       // private instance variable to hold base url
    //    private audioMP3Url = 'http://localhost:8050/user/getAudioMP3/';

 /** GET heroes from the server */
// Fetch all existing comments
getPlayAudio() {
    // return this.http.get<PlayAudio>(this.audioMP3Url);
  }


}