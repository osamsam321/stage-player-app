import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioBoxTopTenSongsMidConfigComponent } from './audio-box-top-ten-songs-mid-config.component';

describe('AudioBoxTopTenSongsMidConfigComponent', () => {
  let component: AudioBoxTopTenSongsMidConfigComponent;
  let fixture: ComponentFixture<AudioBoxTopTenSongsMidConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudioBoxTopTenSongsMidConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AudioBoxTopTenSongsMidConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
