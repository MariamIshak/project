import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogsChartsComponent } from './blogs-charts.component';

describe('BlogsChartsComponent', () => {
  let component: BlogsChartsComponent;
  let fixture: ComponentFixture<BlogsChartsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogsChartsComponent]
    });
    fixture = TestBed.createComponent(BlogsChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
