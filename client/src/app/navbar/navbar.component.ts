import { Component, OnInit } from '@angular/core';
import { CartService } from '../_services/cart.service';
import { PurchasesService } from '../_services/purchases.service';
import { CartModelPublic } from '../_models/cart';
import { Cheese } from '../_models/cheese';
import { PurchasesDialogComponent } from '../purchases-dialog/purchases-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Purchase } from '../_models/purchase';
import { PurchaseItem } from '../_models/purchaseItem';
import { ActionConfirmationDialog } from '../action-confirmation-dialog/action-confirmation-dialog.component';

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
    public purchaseDialog: MatDialog,
    private actionDialog: MatDialog) {}

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

    this.getPurchases();
  }

  getPurchases(callback?) {
    this.purchasesService.getPurchases().subscribe((prchs) => {
      this.purchases = prchs;
      this.purchasesLoaded = true;
      if(callback !== undefined) {
        callback();
      }
    });
  }

  completePurchase() {
    const dialogRef = this.actionDialog.open(ActionConfirmationDialog, {
      width: '720px',
      data: {
        title: 'complete your purchase',
        callback: (() => {
          this.cartService.PurchaseCart((success,purchaseId) => {
            if(success) {
              this.getPurchases((() => {
                this.openRecentPurchases(purchaseId);
                document.getElementById('navbarDropdown-menu').classList.remove("show");
              }).bind(this));
              
            }
          });
        }).bind(this)
      },
    });
    
  }

  //Open the recently purchased dialog and don't reopen if already open
  openRecentPurchases(purchaseId?: number) {
    if(this.purchasesDialogOpen) {
      this.purchaseDialog.closeAll();
      return;
    };
    const dialogRef = this.purchaseDialog.open(PurchasesDialogComponent, {
      width: '720px',
      data: {products: this.products, purchases: this.purchases, purchaseId: purchaseId},
    });
    this.purchasesDialogOpen = true;

    dialogRef.afterClosed().subscribe((data) => {
      if(data) {
        this.addRecentPurchasesToCart(data);
      }
      this.purchasesDialogOpen = false;
    });
  }

  // Add a list of purchase items to the cart
  // Will not remove existing items but rather add to them
  addRecentPurchasesToCart(items: PurchaseItem[]) {
    items.forEach((item) => {
      this.cartService.AddPurchaseItemsToCart(item.cheeseId, item.quantity);
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
