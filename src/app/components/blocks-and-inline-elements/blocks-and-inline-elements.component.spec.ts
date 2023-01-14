import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocksAndInlineElementsComponent } from './blocks-and-inline-elements.component';

describe('BlocksAndInlineElementsComponent', () => {
  let component: BlocksAndInlineElementsComponent;
  let fixture: ComponentFixture<BlocksAndInlineElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlocksAndInlineElementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlocksAndInlineElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
