import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlAndPerformanceComponent } from './html-and-performance.component';

describe('HtmlAndPerformanceComponent', () => {
  let component: HtmlAndPerformanceComponent;
  let fixture: ComponentFixture<HtmlAndPerformanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlAndPerformanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlAndPerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
