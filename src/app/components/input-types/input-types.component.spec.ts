import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTypesComponent } from './input-types.component';

describe('InputTypesComponent', () => {
  let component: InputTypesComponent;
  let fixture: ComponentFixture<InputTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputTypesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
