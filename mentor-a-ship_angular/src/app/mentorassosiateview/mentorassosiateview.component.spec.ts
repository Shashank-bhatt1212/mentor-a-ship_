import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorassosiateviewComponent } from './mentorassosiateview.component';

describe('MentorassosiateviewComponent', () => {
  let component: MentorassosiateviewComponent;
  let fixture: ComponentFixture<MentorassosiateviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorassosiateviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorassosiateviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
