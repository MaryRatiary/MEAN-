import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product | null = null;
  loading = false;
  error = '';
  quantity = 1;
  Math = Math; // Rendre Math accessible dans le template

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.loadProduct(params['id']);
      }
    });
  }

  loadProduct(id: string): void {
    this.loading = true;
    this.productService.getProductById(id).subscribe({
      next: (response) => {
        this.product = response.data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Erreur lors du chargement du produit';
        console.error(err);
        this.loading = false;
      }
    });
  }

  addToCart(): void {
    if (this.product) {
      alert(`${this.quantity} x ${this.product.name} ajouté au panier !`);
      // Ici vous pouvez ajouter la logique du panier
    }
  }

  buyNow(): void {
    if (this.product) {
      alert('Redirection vers le paiement pour ' + this.product.name);
      // Ici vous pouvez ajouter la logique du paiement
    }
  }

  goBack(): void {
    this.router.navigate(['/products']);
  }

  decreaseQuantity(): void {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  increaseQuantity(): void {
    if (this.product && this.quantity < this.product.quantity) {
      this.quantity++;
    }
  }

  getStarRating(): string {
    if (!this.product || !this.product.rating) return '';
    return '⭐'.repeat(Math.floor(this.product.rating));
  }

  getRandomReviewCount(): number {
    return Math.floor(Math.random() * 100) + 10;
  }
}
