import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediumConfigType1Component } from './medium-config-type1.component';

describe('MediumConfigType1Component', () => {
  let component: MediumConfigType1Component;
  let fixture: ComponentFixture<MediumConfigType1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediumConfigType1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediumConfigType1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
