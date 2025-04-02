import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { BookDetails } from 'src/app/model/book-details';
import { Cart } from 'src/app/model/cart';
import { BookService } from 'src/app/service/book.service';
import { CartService } from 'src/app/service/cart.service';
import { WishlistService } from 'src/app/service/wishlist.service';
import { Wishlist } from 'src/app/model/wishlist';
import { Router } from '@angular/router';
// import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {


  id!:number;
  model: BookDetails = new BookDetails();
  token:any;
  cartModel:Cart = new Cart();
  wishlistModel:Wishlist=new Wishlist();
  role:any;
  isCartClicked = false;
  isWishlistClicked = false;
  showPopup = false;
 

  constructor( private service:BookService, private route: ActivatedRoute, private router: Router, 
                private cartService:CartService,private wishlistService:WishlistService
                // , private snackBar: MatSnackBar
              ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getSingleBook();
    this.token = localStorage.getItem('token');
    this.role = localStorage.getItem("role");
  }

  getSingleBook(){
    this.service.getBookById(this.id).subscribe(
      data=>{ this.model = data, console.log(this.model) },
      error=>{ console.log(error)}
    );
  }

  addBookToCart(){
    // this.snackBar.open('Book Added to Cart!', 'Close', {
    //     duration: 2000,  // 2 seconds
    //     horizontalPosition: 'center',
    //     verticalPosition: 'top',
    //     panelClass: ['cart-popup']
    // });
    this.isCartClicked = true;
    setTimeout(() => this.isCartClicked = false, 500);
    this.cartModel.inCartQuantity = 1;
    this.cartService.addToCart(this.token, this.id,this.cartModel ).subscribe(
      data=>{ console.log(data), this.getSingleBook()},
      error=>{console.log(error);
      }
    )
  }

  addToWishlist(){

    this.isWishlistClicked = true;
    setTimeout(() => this.isWishlistClicked = false, 500);
    this.wishlistModel.bookId=this.id;
    this.wishlistService.addToWishlist(this.token, this.wishlistModel).subscribe(
      incomingdata=>{console.log(incomingdata)},
      error=>{console.log(error)}
    );
  }

  navigateToUpdateBook(){
    this.router.navigate([`update-book`]);
  }

  deleteBook(){
    this.service.deleteBook(this.id, this.token).subscribe(
      data => {console.log("book deleted " + data), this.router.navigate([`dashboard`])},
      error => {console.log("error occured during deletion "+ error)}
    )
  }

}
