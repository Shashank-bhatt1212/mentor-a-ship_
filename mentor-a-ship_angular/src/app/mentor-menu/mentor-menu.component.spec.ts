import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorMenuComponent } from './mentor-menu.component';

describe('MentorMenuComponent', () => {
  let component: MentorMenuComponent;
  let fixture: ComponentFixture<MentorMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
