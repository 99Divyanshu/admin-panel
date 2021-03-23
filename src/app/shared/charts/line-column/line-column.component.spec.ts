import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineColumnComponent } from './line-column.component';

describe('LineColumnComponent', () => {
  let component: LineColumnComponent;
  let fixture: ComponentFixture<LineColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineColumnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LineColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
