import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmotherComponent } from './addmother.component';

describe('AddmotherComponent', () => {
  let component: AddmotherComponent;
  let fixture: ComponentFixture<AddmotherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddmotherComponent]
    });
    fixture = TestBed.createComponent(AddmotherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
