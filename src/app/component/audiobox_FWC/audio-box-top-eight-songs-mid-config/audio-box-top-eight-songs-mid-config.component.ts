import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TopEightSongService } from './audio-box-top-eight-songs-mid-config-Service';
import { TopEightSongs } from './TopEightSongs';

@Component({
  selector: 'app-audio-box-top-eight-songs-mid-config',
  templateUrl: './audio-box-top-eight-songs-mid-config.component.html',
  styleUrls: ['./audio-box-top-eight-songs-mid-config.component.css']
})
export class AudioBoxTopEightSongsMidConfigComponent implements OnInit {

  constructor(private topEightSongService: TopEightSongService) { }
  public topEightSongs!: TopEightSongs[];
  resourceFolder = 'C:\GIT\Github\stage-player-audiolibrary\target\classes\static\album_covers'
  ngOnInit(): void {
    this.getUsers();
  
  }

  public getUsers(): void{
    this.topEightSongService.getTopEightSongs().subscribe( 
      (response: TopEightSongs[]) => {
        this.topEightSongs= response;
      },
      (error: HttpErrorResponse) => {
      }
    )
  }

}
