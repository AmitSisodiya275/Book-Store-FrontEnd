import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cart } from '../model/cart';
import { ItemResponse } from '../model/item-response';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  baseUrl:string = environment.cartApiUrl;

  constructor(private http:HttpClient) { }

  addToCart(token:string, bookId:number, cart:Cart):Observable<Object>{
    return this.http.post<Object>(`${this.baseUrl}/add-to-cart/${token}/${bookId}`, cart);
  }

  getProductOfCart(token:string):Observable<ItemResponse>{
    return this.http.get<ItemResponse>(`${this.baseUrl}/get-cart-product/${token}`);
  }

  decreaseOneQuantity(token:string, bookId:number, cart:Cart):Observable<ItemResponse>{
    return this.http.post<ItemResponse>(`${this.baseUrl}/decrease-quantity/${token}/${bookId}`, cart);
  }

  removeBook(token:string, bookId:number):Observable<ItemResponse>{
    return this.http.post<ItemResponse>(`${this.baseUrl}/remove-book/${token}/${bookId}`, null);
  }
}
