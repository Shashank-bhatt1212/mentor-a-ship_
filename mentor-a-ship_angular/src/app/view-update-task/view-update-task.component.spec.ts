import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUpdateTaskComponent } from './view-update-task.component';

describe('ViewUpdateTaskComponent', () => {
  let component: ViewUpdateTaskComponent;
  let fixture: ComponentFixture<ViewUpdateTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewUpdateTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewUpdateTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
