import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, Injectable, OnInit, ViewChild } from '@angular/core';
import { AudioPlaybackUIService } from '../../audioPlaybackUI/audio-playback-ui-service';
import { AudioPlaybackUIComponent } from '../../audioPlaybackUI/audio-playback-ui/audio-playback-ui.component';
import { TopEightSongService } from './audio-box-top-eight-songs-mid-config-Service';
import { PlayAudio } from './PlayAudio';
import { PlayAudioService } from './PlayAudioService';
import { TopEightSongs } from './TopEightSongs';

@Component({
  selector: 'app-audio-box-top-eight-songs-mid-config',
  templateUrl: './audio-box-top-eight-songs-mid-config.component.html',
  styleUrls: ['./audio-box-top-eight-songs-mid-config.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class AudioBoxTopEightSongsMidConfigComponent implements OnInit {
  public aps!: AudioPlaybackUIService;
  @ViewChild('songIdEF') songIdEF!: ElementRef;

  constructor(private topEightSongService: TopEightSongService, songIdEF: ElementRef, private playAudioService:PlayAudioService, aps: AudioPlaybackUIService) { 
    
    this.songIdEF = songIdEF;
    this.aps = aps;
  }
  public topEightSongs!: TopEightSongs[];
  public playAudioValue!: PlayAudio;

  resourceFolder = 'C:\GIT\Github\stage-player-audiolibrary\target\classes\static\album_covers';
  ngOnInit(): void {
    this.getSongsInfo();
  
  }
  ngAfterViewInit() {
     
  }

  public getSongsInfo(): void{
    this.topEightSongService.getTopEightSongs().subscribe( 
      (response: TopEightSongs[]) => {
        this.topEightSongs= response;
      },
      (error: HttpErrorResponse) => {
      }
    )
  }
  // public getAudio(): void{
  //   this.playAudioService.getPlayAudio().subscribe( 
  //     (response: PlayAudio) => {
  //       this.playAudioValue= response;
  //     },
  //     (error: HttpErrorResponse) => {
  //     }
  //   )
  // }
  public playAudioFromSongClick(audioId: string)
  {
   
    
    console.log("playAudioFromSongClick top 8 songs clicked");
    console.log("audio identifier: " + audioId);
    this.aps.updateIdForPlaybackAndPlayAudio(audioId);
  }

}
