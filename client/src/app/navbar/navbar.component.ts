import { Component, OnInit } from '@angular/core';
import { CartService } from '../_services/cart.service';
import { CartModelPublic } from '../_models/cart';
import { Cheese } from '../_models/cheese';
import { PurchasesDialogComponent } from '../purchases-dialog/purchases-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  cartData: CartModelPublic;
  cartSize: number;
  cartTotal: number;
  _message: string;
  products: Cheese[];

  store: any = [];
  logo: any;

  purchasesDialogOpen: boolean = false;

  constructor(private cartService: CartService,
    public purchaseDialog: MatDialog) {}

  ngOnInit() {
    // set the products locally
    this.cartService.productData$.subscribe((data) => {
      this.products = data;
    });

    this.cartService.cartDataObs$.subscribe((data) => {
      this.cartData = data;
      this.cartSize = Object.entries(data).reduce(
        (total, val) => total + val[1],
        0
      );
    });
  }

  //Open the recently purchased dialog and don't reopen if already open
  openRecentPurchases() {
    if(this.purchasesDialogOpen) return;
    const dialogRef = this.purchaseDialog.open(PurchasesDialogComponent, {
      width: '720px',
      data: this.products,
    });
    this.purchasesDialogOpen = true;

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      this.purchasesDialogOpen = false;
    });
  }

  // Increments the number of items in cart if value is positive,
  // or decrements if negative
  changeItemAmount(id: string, value: number) {
    this.cartService.ModifyProductCount(id, value);
  }

  // returns the details for the specified cheese
  getDetails(id: string): Cheese {
    const details = this.products.filter(
      (product) => product.id === parseInt(id)
    );
    return details[0];
  }

  // calculates the total cart cost
  calculateTotal() {
    return Object.entries(this.cartData).reduce(
      (total, [key, value]) => total + this.getDetails(key).price * value,
      0
    );
  }
}
