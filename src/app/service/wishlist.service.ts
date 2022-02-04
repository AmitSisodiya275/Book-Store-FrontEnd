import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ItemResponse } from '../model/item-response';
import { Wishlist } from '../model/wishlist';
@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  baseUrl:string = environment.wishlistApiUrl;

  constructor(private http:HttpClient) { }

  addToWishlist(token:string,wishlist:Wishlist):Observable<Object>{
    return this.http.post<Object>(`${this.baseUrl}/add-to-wishlist/${token}`,wishlist);
  }

  getProductOfWishlist(token:string):Observable<ItemResponse>{
    return this.http.get<ItemResponse>(`${this.baseUrl}/get-wishlist-product/${token}`);
  }

  deleteFromWishlist(token:string,wishlist:Wishlist):Observable<ItemResponse> {
    return this.http.post<ItemResponse>(`${this.baseUrl}/remove-from-wishlist/${token}`,wishlist);
  }
  
}
