import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopEightSongsComponent } from './top-eight-songs.component';

describe('TopEightSongsComponent', () => {
  let component: TopEightSongsComponent;
  let fixture: ComponentFixture<TopEightSongsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopEightSongsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopEightSongsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
