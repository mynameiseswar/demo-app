import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard-list',
  templateUrl: './dashboard-list.component.html',
  styleUrls: ['./dashboard-list.component.scss']
})
export class DashboardListComponent implements OnDestroy {
  productsList: any = [];
  productList$: Subscription | any;
  defaultProductList: any = [];
  categoriesList: any = [];
  constructor(
    private dashbaordService: DashboardService,
    private router: Router
  ) {

  }
  ngOnDestroy(): void {
    this.productList$.unsubscribe();
  }
  ngOnInit(): void {
    this.productList$ = this.dashbaordService.getAllProducts().subscribe(
      (productList) => {
        this.defaultProductList = productList;
        this.productsList = productList;
      }
    );

    this.dashbaordService.getAllCategories().subscribe(
      (categories) => {
        this.categoriesList = categories;
      }
    );
  }

  navigateToDetailsPage(product: any) {
    this.dashbaordService.setSelectedProduct(product);
    this.router.navigate([`/app/dashboard/details/${product.id}`]);
  }
  filterProductsList(targetCategory: string) {
    let afterAppyFilerList = this.defaultProductList.filter(
      (product: any) => {
        if (product.category == targetCategory) {
          return product
        }
      }
    );
    this.productsList = afterAppyFilerList;
  }
  resetFilter() {
    this.productsList = this.defaultProductList;
  }
}
