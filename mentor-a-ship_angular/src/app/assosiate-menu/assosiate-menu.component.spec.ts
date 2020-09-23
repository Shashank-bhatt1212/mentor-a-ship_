import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssosiateMenuComponent } from './assosiate-menu.component';

describe('AssosiateMenuComponent', () => {
  let component: AssosiateMenuComponent;
  let fixture: ComponentFixture<AssosiateMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssosiateMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssosiateMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
