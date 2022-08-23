import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioboxMediumConfigType1Component } from './audiobox-medium-config-type1.component';

describe('AudioboxMediumConfigType1Component', () => {
  let component: AudioboxMediumConfigType1Component;
  let fixture: ComponentFixture<AudioboxMediumConfigType1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudioboxMediumConfigType1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AudioboxMediumConfigType1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
