import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlAndInternationalizationComponent } from './html-and-internationalization.component';

describe('HtmlAndInternationalizationComponent', () => {
  let component: HtmlAndInternationalizationComponent;
  let fixture: ComponentFixture<HtmlAndInternationalizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlAndInternationalizationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlAndInternationalizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
