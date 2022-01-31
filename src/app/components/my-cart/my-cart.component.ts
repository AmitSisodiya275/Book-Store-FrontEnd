import { Component, OnInit } from '@angular/core';
import { concatAll } from 'rxjs';
import { Cart } from 'src/app/model/cart';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.scss']
})
export class MyCartComponent implements OnInit {

  token:any=localStorage.getItem('token');
  cartModel:Cart=new Cart();
  constructor(private cartService: CartService) { }

 
  ngOnInit(): void {
  }

  addOneQuantity(){
    this.cartModel.inCartQuantity=1;
    this.cartService.addToCart(this.token, 1, this.cartModel).subscribe(
      Incomingdata=>{console.log(Incomingdata)},
      error=>{console.log(error)}
    )
  }
}
