import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DlqiComponent } from './dlqi.component';

describe('DlqiComponent', () => {
  let component: DlqiComponent;
  let fixture: ComponentFixture<DlqiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DlqiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DlqiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
