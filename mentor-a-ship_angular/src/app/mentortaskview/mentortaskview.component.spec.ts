import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentortaskviewComponent } from './mentortaskview.component';

describe('MentortaskviewComponent', () => {
  let component: MentortaskviewComponent;
  let fixture: ComponentFixture<MentortaskviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentortaskviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentortaskviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
