import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioBoxTopEightSongsMidConfigComponent } from './audio-box-top-eight-songs-mid-config.component';

describe('AudioBoxTopEightSongsMidConfigComponent', () => {
  let component: AudioBoxTopEightSongsMidConfigComponent;
  let fixture: ComponentFixture<AudioBoxTopEightSongsMidConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudioBoxTopEightSongsMidConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AudioBoxTopEightSongsMidConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
