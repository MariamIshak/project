import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpregnantComponent } from './addpregnant.component';

describe('AddpregnantComponent', () => {
  let component: AddpregnantComponent;
  let fixture: ComponentFixture<AddpregnantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddpregnantComponent]
    });
    fixture = TestBed.createComponent(AddpregnantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
