import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AASDataComponent } from './aasdata.component';

describe('AASDataComponent', () => {
  let component: AASDataComponent;
  let fixture: ComponentFixture<AASDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AASDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AASDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
