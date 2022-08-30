import { ThisReceiver } from '@angular/compiler';
import { Component, ElementRef, Injectable, OnInit, ViewChild } from '@angular/core';
import { PlayAudio } from '../../audiobox_FWC/audio-box-top-eight-songs-mid-config/PlayAudio';
import { HttpClient } from "@angular/common/http";
import { AudioPlaybackUIService, PlaybackAudioBtnImageState } from '../audio-playback-ui-service';

@Component({
  selector: 'app-audio-playback-ui',
  templateUrl: './audio-playback-ui.component.html',
  styleUrls: ['./audio-playback-ui.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class AudioPlaybackUIComponent implements OnInit {
 public playbackBtnStateImgSrc = "";
 public playBackBtnOnPause: boolean;
 public audioPlayBackState!: string;  
 public audioId = "";
 public count = 1;
 public apService!: AudioPlaybackUIService  
 public playbackLock: boolean | undefined;
 public audioIsReadyToPlay: boolean | undefined;
 public mp3AudioUrl = "http://localhost:8050/user/getAudioMP3/";
 public maxVolumeSets = 2000;
 @ViewChild('audioPlayer', { static: true })
  audioPlayerEF: ElementRef<HTMLAudioElement>;
  @ViewChild('volumeRange', { static: true })
  volumeRange: ElementRef<HTMLInputElement>;



  constructor(private http: HttpClient, apService: AudioPlaybackUIService, volumeRange: ElementRef<HTMLInputElement>  ) {
   this.audioPlayerEF = {} as ElementRef;
   this.playBackBtnOnPause = false;
   this.apService = apService;
   this.volumeRange = volumeRange;
  }
  
   ngOnInit(): void {
    this.audioIsReadyToPlay = true;
   



  }
  ngAfterViewInit() {
    this.apService.setHTML5EF(this.audioPlayerEF);
    this.apService.currentaudioPlayBackStateImg.subscribe(image => this.playbackBtnStateImgSrc = image);
    this.apService.currentAudioPlayBackState.subscribe(state => this.audioPlayBackState = state);
    this.apService.currentAudioIdPlayback.subscribe(id => this.audioId = id);
  }

  // public playAudioFromAudioTagClick(audioId: string)
  // {
  //   this.audioId = audioId;
  //   this.onPlayPauseClickWithCount(2);
  // }
  

  private  setPlayCount()
  {
    this.audioIsReadyToPlay = true;
    this.count = 0;
  }
 
  private onPlayPauseClickWithplayBackState(playBackState:boolean): void{

    this.playBackBtnOnPause = (playBackState)? 
        this.playBackBtnOnPause = false: this.playBackBtnOnPause = true;

    if(!this.playBackBtnOnPause)
    {
      // this.imgSrc = "../../../../assets/img/pause.png";
      this.count = 0;

      if(this.audioId != null && this.audioId != "")
      {
        this.apService.playAudioWithNewAudioIdUsingHTML5(this.audioId);
      }
    }
    else
    {
      // this.imgSrc = "../../../../assets/img/play.png"
      this.apService.pauseAudioUsingHTML5();
    }

  }
  private flipPlaybackState()
  {
    this.playBackBtnOnPause = (this.playBackBtnOnPause)? 
      this.playBackBtnOnPause = false: this.playBackBtnOnPause = true;
  }

  public onPlayPauseClick(): void{

    //this.flipPlaybackState();

    // if(!this.playBackBtnOnPause)
    // {
      console.log("pause or play btn clicked");
      this.apService.flipPlaybackState();

      if(this.audioPlayBackState == PlaybackAudioBtnImageState.play.toString())
      {
        console.log("inside of play clicked section 1");

          console.log("inside of play clicked section 2");

          this.apService.playAudioUsingHTML5();
          console.log("current playback image on componponent: " + this.playbackBtnStateImgSrc);
        // }
      }
 
    // }

    else
    {
      this.apService.pauseAudioUsingHTML5();
    }

  }
  onVolumeRangeModified(volumeRangeVal:string)
  {
      const maxVolumeSets = 1000;
      const finalVolumeLevel = Number(volumeRangeVal) / maxVolumeSets;
      this.apService.modifyVolumeHtml5(finalVolumeLevel);
  }
 
}


