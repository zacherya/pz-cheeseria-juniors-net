import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'action-confirmation-dialog-component',
    templateUrl: './action-confirmation-dialog.component.html',
    styleUrls: ['./action-confirmation-dialog.component.css'],
  })
  export class ActionConfirmationDialog implements OnInit {
  
    constructor(
        public dialogRef: MatDialogRef<ActionConfirmationDialog>,
        private toastr: ToastrService,
        @Inject(MAT_DIALOG_DATA) public data: {
          title: string,
          callback: () => {}
        }
    ) {}
  
    ngOnInit() {
      
    }

    //Custom close method for cleanup
    closeDialog(invokeAction: boolean = false): void {
      if (invokeAction) {
        if (this.data.callback && (typeof this.data.callback == "function")) {
          this.data.callback();
        } else {
          console.log("No callback function defined");
          this.toastr.error(`There was a problem proceeding with your request, try again.`);
        }
      }
      this.dialogRef.close();
    }
  }