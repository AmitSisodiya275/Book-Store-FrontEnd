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
  constructor(private bookService: BookService,private router: Router) { }

  ngOnInit(): void {
    this.getBookDetail(this.pageNo);
    this.searchBook();
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

}
