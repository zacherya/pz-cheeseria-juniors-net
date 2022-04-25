import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasesDialogComponent } from './purchases-dialog.component';

describe('PurchasesDialogComponent', () => {
  let component: PurchasesDialogComponent;
  let fixture: ComponentFixture<PurchasesDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PurchasesDialogComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
