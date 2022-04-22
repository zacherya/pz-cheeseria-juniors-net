import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CartService } from '../_services/cart.service';

@Component({
    selector: 'cheese-modal-component',
    templateUrl: './cheese-dialog.component.html',
    styleUrls: ['./cheese-dialog.component.css'],
  })
  export class CheeseDialogComponent implements OnInit {
  
    constructor(
        private cartService: CartService,
        public dialogRef: MatDialogRef<CheeseDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) {}
  
    ngOnInit() {
      console.log(this.data.cheese.id);
    }

    //Add to cart function
    addToCart(id: number) {
        console.log('Added to cart');
        console.log(id);
        this.cartService.AddProductToCart(id);
    }
  
    //Custom close method for cleanup
    closeDialog(): void {
      this.dialogRef.close();
    }
  }