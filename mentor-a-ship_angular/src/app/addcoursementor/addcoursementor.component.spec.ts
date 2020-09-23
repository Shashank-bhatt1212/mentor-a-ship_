import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcoursementorComponent } from './addcoursementor.component';

describe('AddcoursementorComponent', () => {
  let component: AddcoursementorComponent;
  let fixture: ComponentFixture<AddcoursementorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcoursementorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcoursementorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
