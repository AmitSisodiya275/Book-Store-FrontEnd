import { Component, OnInit } from '@angular/core';
import { BookDetails } from 'src/app/model/book-details';
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

  books:BookDetails[]= [];
  cartValue: number | undefined;

  constructor(private cartService: CartService) { }

 
  ngOnInit(): void {
    this.getProductOfCart();
  }

  getProductOfCart(){
    this.cartService.getProductOfCart(this.token).subscribe(
      data=>{ console.log(data), this.books= data.books, this.cartValue= data.itemsQuantity},
      error=> { console.log(error)}
    );
  }


  addOneQuantity(id:number){
    this.cartModel.inCartQuantity=1;
    this.cartService.addToCart(this.token, id, this.cartModel).subscribe(
      Incomingdata=>{console.log(Incomingdata), this.getProductOfCart()},
      error=>{console.log(error)}
    );
  }

  decreaseOneQuantity(id:number){
    this.cartModel.inCartQuantity = 1;
    this.cartService.decreaseOneQuantity(this.token, id, this.cartModel).subscribe(
      data=>{ console.log(data), this.getProductOfCart()},
      error=>{ console.log(error)}
    )
  }

  removeBook(id:number){
    this.cartService.removeBook(this.token, id).subscribe(
      data=>{console.log(data), this.getProductOfCart()},
      error=>{console.log(error)
      }
    )
  }
}
