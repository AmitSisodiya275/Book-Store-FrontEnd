import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/service/book.service';
import { AddBookDetails } from 'src/app/model/add-book';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {
  model:AddBookDetails = new AddBookDetails();
  selectedFile: File | null = null;
  imageUrl: string | null = null;
  constructor(private bookService : BookService, private router: Router) { }

  ngOnInit(): void {
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.model.bookImages = file; 
    }
  }

    addBook() : void {
      console.log("book name " + this.model.bookName)
      this.bookService.addBook(this.model).subscribe(
        data=>{this.model= data,
           this.router.navigate(['/dashboard'])
          },
        error=>(console.log(error))
      );
    }

    onSortChange(event: any) {
      const value = event.target.value;
      this.model.bookCategory = value;
    }
  }