import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  baseUrl=environment.orderApiUrl;
  constructor(private http:HttpClient) { }

  placeOrder(token:string, totalPrice:number){
    return this.http.post(`${this.baseUrl}/place-order/${token}/${totalPrice}`,null)
  }
}
