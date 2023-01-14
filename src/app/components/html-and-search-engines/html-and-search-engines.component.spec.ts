import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlAndSearchEnginesComponent } from './html-and-search-engines.component';

describe('HtmlAndSearchEnginesComponent', () => {
  let component: HtmlAndSearchEnginesComponent;
  let fixture: ComponentFixture<HtmlAndSearchEnginesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlAndSearchEnginesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlAndSearchEnginesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
