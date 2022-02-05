import { Component, OnInit } from '@angular/core';
import { BookDetails } from 'src/app/model/book-details';
import { Wishlist } from 'src/app/model/wishlist';
import { WishlistService } from 'src/app/service/wishlist.service';
@Component({
  selector: 'app-my-wishlist',
  templateUrl: './my-wishlist.component.html',
  styleUrls: ['./my-wishlist.component.scss']
})
export class MyWishlistComponent implements OnInit {
  token:any=localStorage.getItem('token');
  books:BookDetails[]= [];
  wishlistValue:number | undefined;
  wishlist:Wishlist=new Wishlist();
  
  constructor(private service: WishlistService) { }

  ngOnInit(): void {
    this.getProductOfWishlist();
  }

  getProductOfWishlist(){
    this.service.getProductOfWishlist(this.token).subscribe(
      data=>{ console.log(data), this.books= data.books,this.wishlistValue=data.itemsQuantity},
      error=> { console.log(error)}
    );
  }

  onClickDelete(id:number) {
    this.wishlist.bookId=id;
    this.service.deleteFromWishlist(this.token,this.wishlist).subscribe(
      data=>{ console.log(data)},
      error=>{console.log(error)}
    );
    this.getProductOfWishlist();
  }

  

}
