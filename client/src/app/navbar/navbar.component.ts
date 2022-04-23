import { Component, OnInit } from '@angular/core';
import { CartService } from '../_services/cart.service';
import { PurchasesService } from '../_services/purchases.service';
import { CartModelPublic } from '../_models/cart';
import { Cheese } from '../_models/cheese';
import { PurchasesDialogComponent } from '../purchases-dialog/purchases-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Purchase } from '../_models/purchase';

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
  purchases: Purchase[];

  store: any = [];
  logo: any;

  purchasesDialogOpen: boolean = false;

  productsLoaded: boolean = false;
  purchasesLoaded: boolean = false;

  constructor(private cartService: CartService,
    private purchasesService: PurchasesService,
    public purchaseDialog: MatDialog) {}

  ngOnInit() {
    // set the products locally
    this.cartService.productData$.subscribe((data) => {
      this.products = data;
      this.productsLoaded = true;
    });

    this.cartService.cartDataObs$.subscribe((data) => {
      this.cartData = data;
      this.cartSize = Object.entries(data).reduce(
        (total, val) => total + val[1],
        0
      );
    });

    this.purchasesService.getPurchases().subscribe((prchs) => {
      this.purchases = prchs;
      this.purchasesLoaded = true;
    });
  }

  //Open the recently purchased dialog and don't reopen if already open
  openRecentPurchases() {
    if(this.purchasesDialogOpen) return;
    const dialogRef = this.purchaseDialog.open(PurchasesDialogComponent, {
      width: '720px',
      data: {products: this.products, purchases: this.purchases},
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
