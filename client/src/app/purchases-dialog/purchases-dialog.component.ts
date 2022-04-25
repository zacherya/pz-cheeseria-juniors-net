import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Cheese } from '../_models/cheese';
import { Purchase } from '../_models/purchase';
import { DatePipe } from '@angular/common';
import { PurchaseItem } from '../_models/purchaseItem';
import { ActionConfirmationDialog } from '../action-confirmation-dialog/action-confirmation-dialog.component';

@Component({
    selector: 'purchase-modal-component',
    templateUrl: './purchases-dialog.component.html',
    styleUrls: ['./purchases-dialog.component.css'],
    providers: [DatePipe]
  })
  export class PurchasesDialogComponent implements OnInit {
    purchases: Purchase[] = [];
    products: Cheese[] = [];

    accordionStep = 0;
  
    constructor(
      public dialogRef: MatDialogRef<PurchasesDialogComponent>,
      private datePipe: DatePipe,
      public actionDialog: MatDialog,
      @Inject(MAT_DIALOG_DATA) public data: any
    ) {}
  
    ngOnInit() {
      // set the purchases and order by decending
      this.purchases = this.data.purchases.sort((a, b) => {
        return b.id - a.id;
      });
      this.products = this.data.products;
      this.setStep(this.data.purchaseId ? this.purchases.find((purchase) => purchase.id === this.data.purchaseId).id : 0)
    }
  
    //Custom close override method for cleanup
    closeDialog(): void {
      this.dialogRef.close();
    }

    addToCart(items: PurchaseItem[]) {
      const confirmationRef = this.actionDialog.open(ActionConfirmationDialog, {
        width: '720px',
        data: {
          title: 'Add previous purchase items to cart',
          callback: (() => {
            this.dialogRef.close(items)
          }).bind(this)
        },
      });
    }

    getProductFromId(id: number): Cheese {
      return this.products.find((product) => product.id === id);
    }

    getPurchaseIndex(purchase: Purchase): number {
      return this.products.findIndex((p) => p.id === purchase.id);
    }

    getItemTotal(items: PurchaseItem[]): number {
      return items.reduce((total, item) => total + item.quantity, 0);
    }
    getPurchaseTotal(purchase: Purchase): number {
      return purchase.items.reduce((total, item) => {
        return total + item.quantity * this.getProductFromId(item.cheeseId).price;
      }, 0);
    }

    convertPurchaseDate(date: string): string {
      var toTransform = new Date(date);
      return this.datePipe.transform(toTransform, 'MMM d, y h:MM a') + ' (' +this.timeSince(toTransform)+' ago)';
    }

    timeSince(date: Date) : string {
      var seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
      var interval = seconds / 31536000;
    
      if (interval > 1) {
        return Math.floor(interval) === 1 ? Math.floor(interval) + " year" : Math.floor(interval) + " years";
      }
      interval = seconds / 2592000;
      if (interval > 1) {
        return Math.floor(interval) === 1 ? Math.floor(interval) + " month" : Math.floor(interval) + " months";
      }
      interval = seconds / 86400;
      if (interval > 1) {
        return Math.floor(interval) === 1 ? Math.floor(interval) + " day" : Math.floor(interval) + " days";
      }
      interval = seconds / 3600;
      if (interval > 1) {
        return Math.floor(interval) === 1 ? Math.floor(interval) + " hour" : Math.floor(interval) + " hours";
      }
      interval = seconds / 60;
      if (interval > 1) {
        return Math.floor(interval) === 1 ? Math.floor(interval) + " minute" : Math.floor(interval) + " minutes";
      }
      return Math.floor(interval) === 1 ? Math.floor(interval) + " second" : Math.floor(seconds) + " seconds";
    }

    setStep(index: number) {
      this.accordionStep = index;
    }
  }