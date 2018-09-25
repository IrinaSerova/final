import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveyearsComponent } from './fiveyears.component';

describe('FiveyearsComponent', () => {
  let component: FiveyearsComponent;
  let fixture: ComponentFixture<FiveyearsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiveyearsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiveyearsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
