import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheesesTabComponent } from './cheeses-tab.component';

describe('CheesesTabComponent', () => {
  let component: CheesesTabComponent;
  let fixture: ComponentFixture<CheesesTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheesesTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheesesTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
