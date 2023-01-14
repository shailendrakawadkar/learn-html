import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlAndMicroformatsComponent } from './html-and-microformats.component';

describe('HtmlAndMicroformatsComponent', () => {
  let component: HtmlAndMicroformatsComponent;
  let fixture: ComponentFixture<HtmlAndMicroformatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlAndMicroformatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlAndMicroformatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
