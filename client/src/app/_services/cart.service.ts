import { Injectable } from '@angular/core';
import { ProductsService } from './cheeses.service';
import { CartModelPublic } from '../_models/cart';
import { Cheese } from '../_models/cheese';
import { BehaviorSubject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { PurchasesService } from './purchases.service';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  //Data variable to store the cart information on the client's local storage
  private cartDataClient: CartModelPublic = {};

  /*OBSERVABLES FOR THE COMPONENT TO SUBSCRIBE */
  cartTotals$ = new BehaviorSubject<number>(0);
  cartDataObs$ = new BehaviorSubject<CartModelPublic>(this.cartDataClient);
  productData$ = new BehaviorSubject<Cheese[]>([]);

  constructor(private productsService: ProductsService, 
    private purchasesServoce: PurchasesService, 
    private toastr: ToastrService) {
    //fetch cheeses
    this.productsService.getCheeses().subscribe((prods) => {
      this.productData$.next(prods);
    });
  }

  AddProductToCart(id: Number) {
    // if not in cart
    const stringID = id.toString();
    if (this.cartDataClient[stringID] === undefined) {
      // add to cart
      this.cartDataClient[stringID] = 1;
    } else {
      this.cartDataClient[stringID]++;
    }
    this.cartDataObs$.next(this.cartDataClient);
    // console.log(this.cartDataClient);
    this.toastr.success(`${this.productData$.getValue().find(prod => prod.id === id).title} added to cart!`);
  }

  AddPurchaseItemsToCart(id: number, quantity: number) {
    const stringID = id.toString();
    // if not in cart
    if (this.cartDataClient[stringID] === undefined) {
      // add to cart
      this.cartDataClient[stringID] = quantity;
      this.toastr.success(`${quantity}x ${this.productData$.getValue().find(prod => prod.id === id).title} added to cart!`);
    } else {
      this.cartDataClient[stringID] = this.cartDataClient[stringID] + quantity;
      this.toastr.success(`${this.productData$.getValue().find(prod => prod.id === id).title} adjusted to ${this.cartDataClient[stringID]}!`);
    }
    this.cartDataObs$.next(this.cartDataClient);
  }

  // For incrementing and decrementing items in the cart
  // if count is positive, increment, otherwise decrement
  ModifyProductCount(id: string, count: number) {
    if (count > 0) {
      this.cartDataClient[id]++;
      this.cartDataObs$.next(this.cartDataClient);
      return;
    }

    // subtract one
    if (this.cartDataClient[id] > 1) {
      this.cartDataClient[id]--;
      this.cartDataObs$.next(this.cartDataClient);
      return;
    }

    delete this.cartDataClient[id];
    this.cartDataObs$.next(this.cartDataClient);
  }

  // Map cart items to backend new purchase item model
  // and call the purchase service to make a new purchase request with the data
  // return success flag and passes new purchaseId to the callback function
  PurchaseCart(callback) {
    const cart = this.cartDataClient;
    const cartItems = Object.entries(cart).map(([id, quantity]) => {
      return {
        cheeseId: Number(id),
        quantity: quantity,
      };
    });
    this.purchasesServoce.completePurchase(cartItems).subscribe((purchase) => {
      this.toastr.success(`Purchase of ${purchase.items.length} items completed!`);
      this.cartDataClient = {};
      this.cartDataObs$.next(this.cartDataClient);
      callback(true, purchase.id);
    },(err: HttpErrorResponse) => {
      console.log(err.error.title);
      this.toastr.error(`The purchase has failed, check your internet connection and try again.`);
      callback(false, null);
    });
    callback(false, null);
  }
}
