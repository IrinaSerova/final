import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreemonthsComponent } from './threemonths.component';

describe('ThreemonthsComponent', () => {
  let component: ThreemonthsComponent;
  let fixture: ComponentFixture<ThreemonthsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreemonthsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreemonthsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
