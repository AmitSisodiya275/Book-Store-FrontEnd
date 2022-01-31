import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cart } from '../model/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  baseUrl:string = environment.cartApiUrl;

  constructor(private http:HttpClient) { }

  addToCart(token:string, bookId:number, cart:Cart):Observable<Object>{
    return this.http.post<Object>(`${this.baseUrl}/add-to-cart/${token}/${bookId}`, cart);
  }
}
