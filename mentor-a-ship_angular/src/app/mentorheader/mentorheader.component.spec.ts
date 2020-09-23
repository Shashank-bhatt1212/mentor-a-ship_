import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorheaderComponent } from './mentorheader.component';

describe('MentorheaderComponent', () => {
  let component: MentorheaderComponent;
  let fixture: ComponentFixture<MentorheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
