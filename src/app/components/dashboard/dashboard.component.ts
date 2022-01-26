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
  constructor(private bookService: BookService,private router: Router) { }

  ngOnInit(): void {
    this.getBookDetail();
  }
  getBookDetail() {
   
    this.bookService.getAllBooks().subscribe( bookdata => {
      console.log(bookdata);
      this.bookList=bookdata;
      console.log(this.bookList);
      this.totalBooks= bookdata.length;
    });
  }

}
