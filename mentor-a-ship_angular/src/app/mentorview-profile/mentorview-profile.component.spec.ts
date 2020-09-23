import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorviewProfileComponent } from './mentorview-profile.component';

describe('MentorviewProfileComponent', () => {
  let component: MentorviewProfileComponent;
  let fixture: ComponentFixture<MentorviewProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorviewProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorviewProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
