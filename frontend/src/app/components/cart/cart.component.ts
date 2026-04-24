import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];
  totalPrice: number = 0;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe(items => {
      this.cartItems = items;
      this.totalPrice = this.cartService.getTotalPrice();
    });
  }

  updateQty(id: string, qty: number): void {
    if (qty > 0) {
      this.cartService.updateQty(id, qty);
    }
  }

  removeItem(id: string): void {
    this.cartService.removeFromCart(id);
  }

  toCheckout(): void {
    this.router.navigate(['/checkout']);
  }
}
