import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditvaccineComponent } from './editvaccine.component';

describe('EditvaccineComponent', () => {
  let component: EditvaccineComponent;
  let fixture: ComponentFixture<EditvaccineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditvaccineComponent]
    });
    fixture = TestBed.createComponent(EditvaccineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
