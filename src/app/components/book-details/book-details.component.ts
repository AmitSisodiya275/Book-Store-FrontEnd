import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookDetails } from 'src/app/model/book-details';
import { Cart } from 'src/app/model/cart';
import { BookService } from 'src/app/service/book.service';
import { CartService } from 'src/app/service/cart.service';

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
 

  constructor( private service:BookService, private route: ActivatedRoute,
                private cartService:CartService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getSingleBook();
    this.token = localStorage.getItem('token');
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
}
