import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  productForm!: FormGroup;
  loading = false;
  error = '';
  success = '';
  isEditMode = false;
  productId: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.checkEditMode();
  }

  initForm(): void {
    this.productForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      price: ['', [Validators.required, Validators.min(0)]],
      quantity: ['', [Validators.required, Validators.min(0)]],
      category: ['', Validators.required],
      image: [''],
      rating: ['', [Validators.min(0), Validators.max(5)]]
    });
  }

  checkEditMode(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEditMode = true;
        this.productId = params['id'];
        this.loadProduct(params['id']);
      }
    });
  }

  loadProduct(id: string): void {
    this.loading = true;
    this.productService.getProductById(id).subscribe({
      next: (response) => {
        const product = response.data;
        this.productForm.patchValue(product);
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Erreur lors du chargement du produit';
        console.error(err);
        this.loading = false;
      }
    });
  }

  onSubmit(): void {
    if (this.productForm.invalid) {
      this.error = 'Veuillez remplir tous les champs correctement';
      return;
    }

    this.loading = true;
    const product: Product = this.productForm.value;

    if (this.isEditMode && this.productId) {
      this.productService.updateProduct(this.productId, product).subscribe({
        next: () => {
          this.success = 'Produit mis à jour avec succès !';
          this.loading = false;
          setTimeout(() => this.router.navigate(['/']), 2000);
        },
        error: (err) => {
          this.error = 'Erreur lors de la mise à jour';
          console.error(err);
          this.loading = false;
        }
      });
    } else {
      this.productService.createProduct(product).subscribe({
        next: () => {
          this.success = 'Produit créé avec succès !';
          this.loading = false;
          setTimeout(() => this.router.navigate(['/']), 2000);
        },
        error: (err) => {
          this.error = 'Erreur lors de la création';
          console.error(err);
          this.loading = false;
        }
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/']);
  }
}
