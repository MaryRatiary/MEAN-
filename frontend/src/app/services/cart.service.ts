import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems = new BehaviorSubject<any[]>(this.getCartFromStorage());
  cartItems$ = this.cartItems.asObservable();

  constructor() {}

  private getCartFromStorage(): any[] {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
  }

  addToCart(product: any, qty: number = 1): void {
    const items = [...this.cartItems.value];
    const existItem = items.find(x => x.product === product._id);

    if (existItem) {
      existItem.qty += qty;
    } else {
      items.push({
        product: product._id,
        name: product.name,
        image: product.image,
        price: product.price,
        qty: qty
      });
    }

    this.saveCart(items);
  }

  removeFromCart(id: string): void {
    const items = this.cartItems.value.filter(x => x.product !== id);
    this.saveCart(items);
  }

  updateQty(id: string, qty: number): void {
    const items = [...this.cartItems.value];
    const item = items.find(x => x.product === id);
    if (item) {
      item.qty = qty;
      this.saveCart(items);
    }
  }

  clearCart(): void {
    this.saveCart([]);
  }

  private saveCart(items: any[]): void {
    this.cartItems.next(items);
    localStorage.setItem('cart', JSON.stringify(items));
  }

  getTotalPrice(): number {
    return this.cartItems.value.reduce((acc, item) => acc + item.price * item.qty, 0);
  }
}
