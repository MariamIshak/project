import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddvaccineComponent } from './addvaccine.component';

describe('AddvaccineComponent', () => {
  let component: AddvaccineComponent;
  let fixture: ComponentFixture<AddvaccineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddvaccineComponent]
    });
    fixture = TestBed.createComponent(AddvaccineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
