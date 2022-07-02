import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-audio-playback-ui',
  templateUrl: './audio-playback-ui.component.html',
  styleUrls: ['./audio-playback-ui.component.css']
})
export class AudioPlaybackUIComponent implements OnInit {
 imgSrc:string;
 count:number;
  constructor() {
    this.count = 0;
    this.imgSrc = "";
   }
  
  ngOnInit(): void {
    this.count = 0;
    this.imgSrc = "../../../../assets/img/play.png"; 
  }
  onPlayPauseClick(): void{
    this.count++;

    if(this.count >= 2)
    {
      this.imgSrc = "../../../../assets/img/play.png"
      this.count = 0;
    }
    else{
      this.imgSrc = "../../../../assets/img/pause.png"
    }

  }

}
