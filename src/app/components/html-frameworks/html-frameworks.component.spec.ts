import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlFrameworksComponent } from './html-frameworks.component';

describe('HtmlFrameworksComponent', () => {
  let component: HtmlFrameworksComponent;
  let fixture: ComponentFixture<HtmlFrameworksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlFrameworksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlFrameworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
