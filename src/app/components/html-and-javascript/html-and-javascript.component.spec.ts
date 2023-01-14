import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlAndJavascriptComponent } from './html-and-javascript.component';

describe('HtmlAndJavascriptComponent', () => {
  let component: HtmlAndJavascriptComponent;
  let fixture: ComponentFixture<HtmlAndJavascriptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlAndJavascriptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlAndJavascriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
