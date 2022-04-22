import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductsService } from '../_services/cheeses.service';
import { PurchasesService } from '../_services/purchases.service';

@Component({
    selector: 'purchase-modal-component',
    templateUrl: './purchases-dialog.component.html',
    styleUrls: ['./purchases-dialog.component.css'],
  })
  export class PurchasesDialogComponent implements OnInit {
    purchases: [] = [];

    accordionStep = 0;
  
    contentLoadedPrchs: boolean = false;
    contentLoadedProds: boolean = false;
    constructor(
      private purchasesService: PurchasesService,
      public dialogRef: MatDialogRef<PurchasesDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any
    ) {}
  
    ngOnInit() {
      this.purchasesService.getPurchases().subscribe((prchs) => {
        this.purchases = prchs;
        this.contentLoadedPrchs = true;
      });
    }
  
    //Custom close method for cleanup
    closeDialog(): void {
      this.dialogRef.close();
    }

    setStep(index: number) {
      this.accordionStep = index;
    }
  
    nextStep() {
      this.accordionStep++;
    }
  
    prevStep() {
      this.accordionStep--;
    }
  }