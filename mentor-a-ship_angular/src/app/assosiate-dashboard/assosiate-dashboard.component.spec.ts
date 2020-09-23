import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssosiateDashboardComponent } from './assosiate-dashboard.component';

describe('AssosiateDashboardComponent', () => {
  let component: AssosiateDashboardComponent;
  let fixture: ComponentFixture<AssosiateDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssosiateDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssosiateDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
