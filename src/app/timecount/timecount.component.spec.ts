import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimecountComponent } from './timecount.component';

describe('TimecountComponent', () => {
  let component: TimecountComponent;
  let fixture: ComponentFixture<TimecountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimecountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimecountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
