import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class DashboardService {

    private selectedProduct: any;

    constructor(
        private http: HttpClient
    ) {

    }


    setSelectedProduct(product: any) {
        this.selectedProduct = product;
    }
    getSelectedProdudt() {
        return this.selectedProduct;
    }




    getAllProducts() {
        return this.http.get('https://fakestoreapi.com/products');
    }

    getAllCategories() {
        return this.http.get('https://fakestoreapi.com/products/categories');
    }
}