import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlAndCssComponent } from './html-and-css.component';

describe('HtmlAndCssComponent', () => {
  let component: HtmlAndCssComponent;
  let fixture: ComponentFixture<HtmlAndCssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlAndCssComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlAndCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
