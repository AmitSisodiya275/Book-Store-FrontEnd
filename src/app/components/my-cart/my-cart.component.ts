import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookDetails } from 'src/app/model/book-details';
import { CartItems } from 'src/app/model/car-items';
import { Cart } from 'src/app/model/cart';
import { Order } from 'src/app/model/order';
import { CartService } from 'src/app/service/cart.service';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.scss']
})
export class MyCartComponent implements OnInit {

  token:any=localStorage.getItem('token');
  cartModel:Cart=new Cart();

  books:BookDetails[]= [];

  cartItems : CartItems[] = [];
  cartValue: number = 0;
  order:Order = new Order;
  id!:number;

  statesList: string[] = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
    "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
    "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
    "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
    "Uttar Pradesh", "Uttarakhand", "West Bengal"
  ];
  selectedState: string = "";
  houseNo: string = "";
  road: string = "";
  city: string = "";
  pincode: string = ""; 
  totalAmount : number;
  cardNumber : string;
  cvv : any;
  expiry : any;

  constructor(private cartService: CartService, private orderService:OrderService, private router:Router) { }
 
  ngOnInit(): void {
    this.getProductOfCart();
    // this.cartService.cartCount.next(this.cartValue)
  }

  // getProductOfCart(){
  //   this.cartService.getProductOfCart(this.token).subscribe(
  //     data=>{ console.log(data), this.books= data.books, this.cartValue= data.itemsQuantity},
  //     error=> { console.log(error)}
  //   );
  // }

  getProductOfCart(){
    this.cartService.getProductOfCart(this.token).subscribe(
      data=>{ console.log(data), this.cartItems= data.cartItems, this.cartValue= data.totalCartQuantity,
        this.totalAmount = this.getTotalPrice();
      },
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

  placeOrder(){
    this.orderService.placeOrder(this.token, this.totalAmount).subscribe(
      data=>{console.log(data), 
        this.order = data,
        console.log(this.order.orderId) , this.id = this.order.orderId, this.routeToSuccess(this.id)},
      error=>{ console.log(error)}
    )  }

    routeToSuccess(id:number){
      this.router.navigate([`/order-successfull/${id}`])
    }
    getTotalPrice(): number {
      return this.cartItems.reduce((total, item) => total + (item.book.bookPrice * item.quantity), 0);
  }

  validateNumberInput(event: KeyboardEvent) {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
    }
  }

  onCardNumberInput() {
    // Remove any non-digit characters (just in case)
    this.cardNumber = this.cardNumber.replace(/\D/g, '');
  }
  
}
