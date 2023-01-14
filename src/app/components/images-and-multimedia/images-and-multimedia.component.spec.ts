import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesAndMultimediaComponent } from './images-and-multimedia.component';

describe('ImagesAndMultimediaComponent', () => {
  let component: ImagesAndMultimediaComponent;
  let fixture: ComponentFixture<ImagesAndMultimediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagesAndMultimediaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagesAndMultimediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
