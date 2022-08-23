import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AASDataMinimal1Component } from './aasdata-minimal1.component';

describe('AASDataMinimal1Component', () => {
  let component: AASDataMinimal1Component;
  let fixture: ComponentFixture<AASDataMinimal1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AASDataMinimal1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AASDataMinimal1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
