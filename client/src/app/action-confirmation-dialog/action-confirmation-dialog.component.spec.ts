import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionConfirmationDialog } from './action-confirmation-dialog.component';

describe('ActionConfirmationComponent', () => {
  let component: ActionConfirmationDialog;
  let fixture: ComponentFixture<ActionConfirmationDialog>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActionConfirmationDialog],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionConfirmationDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
