import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PregnantComponent } from './pregnant.component';

describe('PregnantComponent', () => {
  let component: PregnantComponent;
  let fixture: ComponentFixture<PregnantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PregnantComponent]
    });
    fixture = TestBed.createComponent(PregnantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
