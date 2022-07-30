import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinimetricsComponent } from './clinimetrics.component';

describe('ClinimetricsComponent', () => {
  let component: ClinimetricsComponent;
  let fixture: ComponentFixture<ClinimetricsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClinimetricsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClinimetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
