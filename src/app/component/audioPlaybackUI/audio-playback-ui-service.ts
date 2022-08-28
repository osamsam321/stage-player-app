import { ElementRef, Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

  @Injectable({
    providedIn: 'root'
   })
export class AudioPlaybackUIService{

        audioPlayerEF!: ElementRef<HTMLAudioElement>;
        // please follow this pattern for secure state
        private audioPlayBackStateImg = new BehaviorSubject(new PlaybackAudioBtnImage(PlaybackAudioBtnImageState.play).getImageUrlString());
        currentaudioPlayBackStateImg = this.audioPlayBackStateImg.asObservable();
        public mp3AudioUrl = "http://localhost:8050/user/getAudioMP3/";
        private audioIdForPlayback= new BehaviorSubject('');
        currentAudioIdPlayback = this.audioIdForPlayback.asObservable();

        private audioPlayBackState = new BehaviorSubject(PlaybackAudioBtnImageState.pause.toString());
        currentAudioPlayBackState = this.audioPlayBackState.asObservable();
        
        constructor() {
        }
        
        public updateIdForPlayback(audioIdForPlayback: string) {
            let success = false;
            
            if (audioIdForPlayback != null && audioIdForPlayback != "")
            {
                this.audioIdForPlayback.next(audioIdForPlayback);
                success = true;
            }
            return success;
        }
        public updatePlaybackPausedState(state: boolean) {
            
        }

        public updateIdForPlaybackAndPlayAudio(audioIdForPlayback: string) {
          console.info("inside of updateIdForPlaybackAndPlayAudio method");
            if(this.updateIdForPlayback(audioIdForPlayback))
            {
                 this.playAudio(audioIdForPlayback);
            }
          }
        public playAudio(audioIdForPlayback: string)
        {
            try {
                console.log("starting audio playback");
                this.audioPlayerEF.nativeElement.src = this.mp3AudioUrl + audioIdForPlayback;
                this.audioPlayerEF.nativeElement.play();
                this.audioPlayBackStateImg.next(new PlaybackAudioBtnImage(PlaybackAudioBtnImageState.pause).getImageUrlString());
                console.log("current behavior subject value for img: " + this.audioPlayBackStateImg.value);
                console.log(this.audioPlayBackStateImg.value);
                this.audioPlayBackState.next(PlaybackAudioBtnImageState.play.toString());
            } catch (error) {
                console.log(error);
            }


        }
        public pauseAudio()
        {
            this.audioPlayerEF.nativeElement.pause();
            this.audioPlayBackStateImg.next(new PlaybackAudioBtnImage(PlaybackAudioBtnImageState.play).getImageUrlString());
            this.audioPlayBackState.next(PlaybackAudioBtnImageState.pause.toString());
        }
 
        public playAudioHTML5EF(ef: ElementRef)
        {
            ef.nativeElement.play();
            
        }
        public pauseAudioHTML5EF(ef: ElementRef)
        {
            ef.nativeElement.pause();

        }
        public stopAudioHTML5EF(ef: ElementRef)
        {
            ef.nativeElement.stop();
        }
        public setHTML5EF(ef: ElementRef)
        {
            this.audioPlayerEF = ef;
            this.audioPlayerEF.nativeElement.pause();
        }
        public flipPlaybackState()
        {
            this.audioPlayBackState.next( ( this.audioPlayBackState.value == PlaybackAudioBtnImageState.play.toString() )?
                 PlaybackAudioBtnImageState.pause.toString(): PlaybackAudioBtnImageState.play.toString());
        }
        
}
class PlaybackAudioBtnImage
{
   
    playImg = '../../../../assets/img/play.png';
    pauseImg = "../../../../assets/img/pause.png";
    image = this.pauseImg;
    
    constructor(imagetype: PlaybackAudioBtnImageState)
    {
        if(imagetype == PlaybackAudioBtnImageState.play)
            this.image = this.playImg;
        else
            this.image = this.pauseImg;
    }
    
    getImageUrlString()
    {
        return this.image;
    }
}
export enum PlaybackAudioBtnImageState
{
    pause, play
}