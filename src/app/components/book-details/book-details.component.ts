import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookDetails } from 'src/app/model/book-details';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {


  id!:number;
  model: BookDetails = new BookDetails();

  constructor( private service:BookService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getSingleBook();
  }

  getSingleBook(){
    this.service.getBookById(this.id).subscribe(
      data=>{ this.model = data },
      error=>{ console.log(error)}
    );
  }
}
