import { Component, OnInit } from '@angular/core';
import { BookDetails } from 'src/app/model/book-details';
import { BookService } from 'src/app/service/book.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  bookList:BookDetails[]=[];
  totalBooks:number | undefined;
  searchKey:string="";
  pageNo:number=1;
  role:any;
  constructor(private bookService: BookService,private router: Router) { }

  ngOnInit(): void {
    this.getBookDetail(this.pageNo);
    this.searchBook();
    this.role = localStorage.getItem("role");
  }
  getBookDetail(num:number) {
   
    this.bookService.getAllBooks(num).subscribe( bookdata => {
      console.log(bookdata);
      this.bookList=bookdata;
      console.log(this.bookList);
      this.totalBooks= bookdata.length;
    });
  }
  onClickBook(id:number) {
    this.router.navigate([`book/${id}`]);
  }

  searchBook() {
    this.bookService.search.subscribe(val => {
      this.searchKey=val;
    })
  }
  clickPageOne() {
    this.pageNo=1;
    this.getBookDetail(this.pageNo);
  }
  clickPageTwo() {
    this.pageNo=2;
    this.getBookDetail(this.pageNo);
  }

  navigateToAddBook(){
    this.router.navigate([`add-book`]);
  }
  onSortChange(event: any) {
    const sortOption = event.target.value;

    if (sortOption === 'Price:Low to High') {
      this.sortBooksByPriceLowToHigh();
    } else if (sortOption === 'Price:High to Low') {
      this.sortBooksByPriceHighToLow();
    } else if (sortOption === 'newestArrivals') {
     // this.sortBooksByNewestArrivals();
    } else {
      this.sortBooksByRelevance(); // Default to relevance
    }
  }

  // Sort books by price: Low to High
  sortBooksByPriceLowToHigh() {
    this.bookList.sort((a, b) => a.bookPrice - b.bookPrice);
  }

  // Sort books by price: High to Low
  sortBooksByPriceHighToLow() {
    this.bookList.sort((a, b) => b.bookPrice - a.bookPrice);
  }

  // Sort books by newest arrivals (based on releaseDate)
  // sortBooksByNewestArrivals() {
  //   this.bookList.sort((a, b) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime());
  // }

  // Sort books by relevance (example: by book name or rating, depending on your criteria)
  sortBooksByRelevance() {
    this.bookList.sort((a, b) => b.bookRating - a.bookRating);  // Example: sort by rating
  }
}
