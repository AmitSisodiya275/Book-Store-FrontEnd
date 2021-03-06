import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/model/order';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-my-order',
  templateUrl: './my-order.component.html',
  styleUrls: ['./my-order.component.scss']
})
export class MyOrderComponent implements OnInit {

  token:any = localStorage.getItem('token');
  orders:Order[] = [];

  constructor(private orderService:OrderService) { }


  ngOnInit(): void {
    this.getOrders();
  }

  getOrders(){
    this.orderService.getAllOrders(this.token).subscribe(
      data=>{ this.orders = data,   console.log(this.orders), console.log(this.orders[10].books)}
    )
  
    
  }
}
