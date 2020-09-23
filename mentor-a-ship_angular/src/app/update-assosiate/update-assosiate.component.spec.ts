import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAssosiateComponent } from './update-assosiate.component';

describe('UpdateAssosiateComponent', () => {
  let component: UpdateAssosiateComponent;
  let fixture: ComponentFixture<UpdateAssosiateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateAssosiateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAssosiateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
