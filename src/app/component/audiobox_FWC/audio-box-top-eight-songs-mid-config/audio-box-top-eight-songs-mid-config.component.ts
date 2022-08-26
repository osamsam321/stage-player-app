import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TopEightSongService } from './audio-box-top-eight-songs-mid-config-Service';
import { PlayAudio } from './PlayAudio';
import { PlayAudioService } from './PlayAudioService';
import { TopEightSongs } from './TopEightSongs';

@Component({
  selector: 'app-audio-box-top-eight-songs-mid-config',
  templateUrl: './audio-box-top-eight-songs-mid-config.component.html',
  styleUrls: ['./audio-box-top-eight-songs-mid-config.component.css']
})
export class AudioBoxTopEightSongsMidConfigComponent implements OnInit {

  constructor(private topEightSongService: TopEightSongService, private playAudioService:PlayAudioService) { }
  public topEightSongs!: TopEightSongs[];
  public playAudioValue!: PlayAudio;
  @ViewChild('audioplay', { static: false })
  audioPlayEF!: ElementRef;

  resourceFolder = 'C:\GIT\Github\stage-player-audiolibrary\target\classes\static\album_covers';
  ngOnInit(): void {
    this.getSongsInfo();
  
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
  public playAudio()
  {
    this.audioPlayEF.nativeElement.play();
  }

}
