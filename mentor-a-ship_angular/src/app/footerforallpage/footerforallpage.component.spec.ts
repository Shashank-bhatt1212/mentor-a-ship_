import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterforallpageComponent } from './footerforallpage.component';

describe('FooterforallpageComponent', () => {
  let component: FooterforallpageComponent;
  let fixture: ComponentFixture<FooterforallpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterforallpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterforallpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
