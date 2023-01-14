import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlAndMicrodataComponent } from './html-and-microdata.component';

describe('HtmlAndMicrodataComponent', () => {
  let component: HtmlAndMicrodataComponent;
  let fixture: ComponentFixture<HtmlAndMicrodataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlAndMicrodataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlAndMicrodataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
