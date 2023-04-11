import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, throwError } from "rxjs";

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
        return this.http.get('https://fakestoreapi.com/products').pipe(
            catchError(this.handerError)
        );
    }

    getProductDetailsById(productId: number){
        return this.http.get(`https://fakestoreapi.com/products/${productId}`).pipe(
            catchError(this.handerError)
        );
    }

    getAllCategories() {
        return this.http.get('https://fakestoreapi.com/products/categories').pipe(
            catchError(this.handerError)
        );
    }

    private handerError(e: HttpErrorResponse){
        let errorMessage = '';

        switch(e.status){
            case 404:
                errorMessage = "Service Not Found."
                break;
            case 500:
                errorMessage = 'Internal Server Error. Please try after some time.';
                break;
            default:
                errorMessage = 'Application Under mainteane.'
                break;
        }
        console.log(e);

        return throwError(() => new Error(errorMessage));
    }
}