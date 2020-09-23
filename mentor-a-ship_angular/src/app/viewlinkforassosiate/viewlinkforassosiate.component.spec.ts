import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewlinkforassosiateComponent } from './viewlinkforassosiate.component';

describe('ViewlinkforassosiateComponent', () => {
  let component: ViewlinkforassosiateComponent;
  let fixture: ComponentFixture<ViewlinkforassosiateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewlinkforassosiateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewlinkforassosiateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
