import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioPlaybackUIComponent } from './audio-playback-ui.component';

describe('AudioPlaybackUIComponent', () => {
  let component: AudioPlaybackUIComponent;
  let fixture: ComponentFixture<AudioPlaybackUIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudioPlaybackUIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AudioPlaybackUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
