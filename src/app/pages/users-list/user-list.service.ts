import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserListService {

  constructor(
    private httpClient: HttpClient
  ) { }


  getAllProducts() {
    return this.httpClient.get('https://api.escuelajs.co/api/v1/products/413');
  }

  addNewProduct(newProduct: any) {
    return this.httpClient.post('https://api.escuelajs.co/api/v1/products', newProduct);
  }

}
