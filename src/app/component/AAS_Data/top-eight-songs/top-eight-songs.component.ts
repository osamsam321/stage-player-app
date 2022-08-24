import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TopEightSongs } from './TopEight';
import { TopEightSongService } from './TopEightService';

@Component({
  selector: 'app-top-eight-songs',
  templateUrl: './top-eight-songs.component.html',
  styleUrls: ['./top-eight-songs.component.css']
})
export class TopEightSongsComponent implements OnInit {

 
  constructor(private topEightSongService: TopEightSongService){}
  public topEightSongs!: TopEightSongs[];
  ngOnInit(): void {
  }

  getTopEightSongs() {
    this.topEightSongService.getTopEightSongs().subscribe(
      (response: TopEightSongs[]) => {
        this.topEightSongs= response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

 


}
