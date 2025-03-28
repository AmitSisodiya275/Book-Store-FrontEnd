import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { BookDetails } from 'src/app/model/book-details';
import { Cart } from 'src/app/model/cart';
import { BookService } from 'src/app/service/book.service';
import { CartService } from 'src/app/service/cart.service';
import { WishlistService } from 'src/app/service/wishlist.service';
import { Wishlist } from 'src/app/model/wishlist';
import { Router } from '@angular/router';

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
 

  constructor( private service:BookService, private route: ActivatedRoute, private router: Router, 
                private cartService:CartService,private wishlistService:WishlistService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getSingleBook();
    this.token = localStorage.getItem('token');
    this.role = localStorage.getItem("role");
  }

  getSingleBook(){
    this.service.getBookById(this.id).subscribe(
      data=>{ this.model = data },
      error=>{ console.log(error)}
    );
  }

  addBookToCart(){
    this.cartModel.inCartQuantity = 1;
    this.cartService.addToCart(this.token, this.id,this.cartModel ).subscribe(
      data=>{ console.log(data), this.getSingleBook()},
      error=>{console.log(error);
      }
    )
  }

  addToWishlist(){
    this.wishlistModel.bookId=this.id;
    this.wishlistService.addToWishlist(this.token, this.wishlistModel).subscribe(
      incomingdata=>{console.log(incomingdata)},
      error=>{console.log(error)}
    );
  }

  navigateToUpdateBook(){
    this.router.navigate([`update-book`]);
  }
}
