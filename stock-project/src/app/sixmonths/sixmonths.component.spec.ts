import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SixmonthsComponent } from './sixmonths.component';

describe('SixmonthsComponent', () => {
  let component: SixmonthsComponent;
  let fixture: ComponentFixture<SixmonthsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SixmonthsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SixmonthsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
