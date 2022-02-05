import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Order } from '../model/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  baseUrl=environment.orderApiUrl;
  constructor(private http:HttpClient) { }

  placeOrder(token:string, totalPrice:number):Observable<Order>{
    return this.http.post<Order>(`${this.baseUrl}/place-order/${token}/${totalPrice}`,null)
  }
}
