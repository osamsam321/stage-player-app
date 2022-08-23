import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserService } from './component/user/user.service';
import {UserComponent} from './component/user/user.component';
import { RouterModule } from '@angular/router';
import { NavHeaderComponent } from './component/nav-header/nav-header.component';
import { HomeComponent } from './component/home/home.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { LeftNavComponent } from './component/left-nav/left-nav.component';
import { HomecComponent } from './component/main content/homec/homec.component';
import { AudioPlaybackUIComponent } from './component/audioPlaybackUI/audio-playback-ui/audio-playback-ui.component';
import { ArtistComponent } from './component/artist/artist.component';
import { LibraryComponent } from './component/library/library.component';
import { LoginComponent } from './component/login/login.component';
import { AccountComponent } from './component/account/account.component';
import { ContactComponent } from './component/contact/contact.component';
import { MediumConfigType1Component } from './component/audiobox_container/medium-config-type1/medium-config-type1.component';
import { AASDataMinimal1Component } from './component/AAS_Data/aasdata-minimal1/aasdata-minimal1.component';
import { AASDataComponent } from './component/AAS_Data/aasdata/aasdata.component';
import { AudioBoxTopTenSongsMidConfigComponent } from './component/audiobox_FWC/audio-box-top-ten-songs-mid-config/audio-box-top-ten-songs-mid-config.component';
import { AudioboxMediumConfigType1Component } from './component/audiobox_container/audiobox-medium-config-type1/audiobox-medium-config-type1.component';
import { AudioBoxTopEightSongsMidConfigComponent } from './component/audiobox_FWC/audio-box-top-eight-songs-mid-config/audio-box-top-eight-songs-mid-config.component';
import { TopEightSongsComponent } from './component/AAS_DATA/top-eight-songs/top-eight-songs.component';



@NgModule({
  declarations: [
    AppComponent, UserComponent, NavHeaderComponent, HomeComponent, PageNotFoundComponent, LeftNavComponent, HomecComponent, AudioPlaybackUIComponent, ArtistComponent, LibraryComponent, LoginComponent, AccountComponent, ContactComponent, MediumConfigType1Component, AASDataMinimal1Component, AASDataComponent, AudioBoxTopTenSongsMidConfigComponent, AudioboxMediumConfigType1Component, AudioBoxTopEightSongsMidConfigComponent, TopEightSongsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'signUp',
        component: UserComponent
    
      },
      {
        path: 'login',
        component: LoginComponent
    
      },
      {
        path:"home",
        component: HomeComponent
      },
      {
        path:"contact",
        component: ContactComponent
      },
      {
        path:"",
        component: LoginComponent
      },
      {
        path: '**',
        component: PageNotFoundComponent
      }
      
    ])
  ],
  providers: [UserService],
  bootstrap: [AppComponent, UserComponent]
})
export class AppModule { }
