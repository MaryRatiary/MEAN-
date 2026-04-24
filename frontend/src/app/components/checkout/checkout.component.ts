import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartService } from '../../services/cart.service';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  checkoutForm!: FormGroup;
  totalPrice: number = 0;

  constructor(
    private fb: FormBuilder,
    private cartService: CartService,
    private http: HttpClient,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/login']);
      return;
    }

    this.totalPrice = this.cartService.getTotalPrice();
    this.checkoutForm = this.fb.group({
      address: ['', Validators.required],
      city: ['', Validators.required],
      postalCode: ['', Validators.required],
      country: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.checkoutForm.valid) {
      const order = {
        orderItems: this.cartService.cartItems$.subscribe(items => items),
        shippingAddress: this.checkoutForm.value,
        paymentMethod: 'Stripe',
        itemsPrice: this.totalPrice,
        taxPrice: 0,
        shippingPrice: 0,
        totalPrice: this.totalPrice
      };

      // We need to fetch items synchronously from the observable
      this.cartService.cartItems$.subscribe(items => {
        const orderData = {
          ...order,
          orderItems: items
        };

        const token = this.authService.getToken();
        this.http.post('http://localhost:5000/api/orders', orderData, {
          headers: { Authorization: `Bearer ${token}` }
        }).subscribe({
          next: (res: any) => {
            if (res.success) {
              alert('Order placed successfully!');
              this.cartService.clearCart();
              this.router.navigate(['/']);
            }
          },
          error: (err) => alert('Order failed: ' + (err.error.message || 'Unknown error'))
        });
      }).unsubscribe();
    }
  }
}
