import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  stats: any = {
    totalProducts: 0,
    totalOrders: 0,
    totalUsers: 0,
    totalSales: 0,
    recentOrders: []
  };

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fetchStats();
  }

  fetchStats(): void {
    const token = this.authService.getToken();
    this.http.get('http://localhost:5000/api/admin/stats', {
      headers: { Authorization: `Bearer ${token}` }
    }).subscribe({
      next: (res: any) => {
        this.stats = res.data;
      },
      error: (err) => console.error(err)
    });
  }

  addProduct(): void {
    this.router.navigate(['/admin/products/new']);
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
