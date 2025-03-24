import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/service/book.service';
import { AddBookDetails } from 'src/app/model/add-book';
import { Observable } from 'rxjs';
import { BookUploadService } from 'src/app/service/book-upload.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {
  model:AddBookDetails = new AddBookDetails();
  selectedFile: File | null = null;
  imageUrl: string | null = null;
  constructor(private bookUplaodService : BookUploadService) { }

  ngOnInit(): void {
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.model.bookImages = file;  // Store the selected file
    }
  }

  onSubmit(): void {
    if (!this.model) {
      console.error("Error: this.model is undefined");
      return;
    }
    const formData = new FormData();
    formData.append('bookName',this.model.bookName || '');
    formData.append('bookAuthor', this.model.bookAuthor || '');
    formData.append('bookDescription', this.model.bookDescription || '');
    formData.append('bookPrice', this.model.bookPrice || '');
    formData.append('bookRating', this.model.bookRating || '');
    // formData.append('bookImages', this.model.bookImages as Blob);
    this.bookUplaodService.uploadBook(formData, this.model.bookImages);
    }
  }