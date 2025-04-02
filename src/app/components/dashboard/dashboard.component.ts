import { Component, OnInit } from '@angular/core';
import { BookDetails } from 'src/app/model/book-details';
import { BookService } from 'src/app/service/book.service';
import { Router } from '@angular/router';
import { AllBooks } from 'src/app/model/all-books';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  bookList:BookDetails[]=[];
  unFilteredBooks:BookDetails[]=[];
  allBooks : AllBooks;
  totalBooks:number= 0;
  searchKey:string="";
  booksPerPage: number = 8;
  totalPages: number = 1;
  currentPage: number = 1;
  pagesArray: number[] = [];
  role:any;
  isPaginationCalculated: boolean = false;

  constructor(private bookService: BookService,private router: Router) { }

  ngOnInit(): void {
    this.getBookDetail(this.currentPage);
    this.searchBook();
    // this.calculatePages();
    this.role = localStorage.getItem("role");
  }

  calculatePages() {
    if (!this.isPaginationCalculated) { // Prevents unnecessary recalculations
      this.totalPages = Math.ceil(this.totalBooks / this.booksPerPage);
      this.pagesArray = Array.from({ length: this.totalPages }, (_, i) => i + 1);
      console.log("Total Pages Calculated:", this.pagesArray);
      this.isPaginationCalculated = true; // Mark pagination as calculated
    }
  }

  goToPage(page: number) {
    this.currentPage = page;
    console.log('Current Page:', this.currentPage);
    this.getBookDetail(page);
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.goToPage(this.currentPage - 1);
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.goToPage(this.currentPage + 1);
    }
  }
  getBookDetail(num:number) {
   
    this.bookService.getAllBooks(num).subscribe( bookdata => {
      console.log(bookdata);
      this.bookList=bookdata.books;
      this.unFilteredBooks = [...this.bookList];
      console.log(this.bookList);
      this.totalBooks= bookdata.totalBooks;
      if (!this.isPaginationCalculated) { // Only calculate totalBooks once
        this.totalBooks = bookdata.totalBooks;
        this.calculatePages();
      }
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
  // clickPageOne() {
  //   this.pageNo=1;
  //   this.getBookDetail(this.pageNo);
  // }
  // clickPageTwo() {
  //   this.pageNo=2;
  //   this.getBookDetail(this.pageNo);
  // }

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

  groupByCategory(event : any) {
    const mood = event.target.value;
    if(mood === 'All'){
      this.bookList = this.unFilteredBooks;
    } else {
      this.bookList = this.unFilteredBooks.filter( singleBook => singleBook.bookCategory === mood);
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
