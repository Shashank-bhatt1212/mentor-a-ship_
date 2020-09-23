import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssosiateRegisterComponent } from './assosiate-register.component';

describe('AssosiateRegisterComponent', () => {
  let component: AssosiateRegisterComponent;
  let fixture: ComponentFixture<AssosiateRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssosiateRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssosiateRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
