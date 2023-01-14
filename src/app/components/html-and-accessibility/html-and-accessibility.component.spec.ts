import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlAndAccessibilityComponent } from './html-and-accessibility.component';

describe('HtmlAndAccessibilityComponent', () => {
  let component: HtmlAndAccessibilityComponent;
  let fixture: ComponentFixture<HtmlAndAccessibilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlAndAccessibilityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlAndAccessibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
