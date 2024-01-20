import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotherChartsComponent } from './mother-charts.component';

describe('MotherChartsComponent', () => {
  let component: MotherChartsComponent;
  let fixture: ComponentFixture<MotherChartsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MotherChartsComponent]
    });
    fixture = TestBed.createComponent(MotherChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
