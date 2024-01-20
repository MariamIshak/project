import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerChartsComponent } from './seller-charts.component';

describe('SellerChartsComponent', () => {
  let component: SellerChartsComponent;
  let fixture: ComponentFixture<SellerChartsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SellerChartsComponent]
    });
    fixture = TestBed.createComponent(SellerChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
