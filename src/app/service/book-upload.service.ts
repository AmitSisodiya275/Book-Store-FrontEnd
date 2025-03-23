import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookUploadService {

  addBookUrl:string = environment.addBookApiUrl;

  constructor(private http: HttpClient) { }

  // Method to upload book data (including image)
  uploadBook(bookDetails: any, bookImage: File): Observable<any> {
    console.log("api called for upload book")
    // const formData = new FormData();
    // formData.append('bookName', bookDetails.bookName);
    // formData.append('bookAuthor', bookDetails.bookAuthor);
    // formData.append('bookDescription', bookDetails.bookDescription);
    // formData.append('bookPrice', bookDetails.bookPrice);
    // formData.append('bookRating', bookDetails.bookRating);
    // formData.append('bookImages', bookImage, bookImage.name); // Append image file to form data
    const formData = new FormData();
    formData.append('bookName', bookDetails.bookName || '');
    formData.append('bookAuthor', bookDetails.bookAuthor || '');
    formData.append('bookDescription', bookDetails.bookDescription || '');
    formData.append('bookPrice', bookDetails.bookPrice || '');
    formData.append('bookRating', bookDetails.bookRating || '');
  
    // Append the image file to the FormData object
    if (bookImage) {
      formData.append('bookImages', bookImage as Blob);
    }

    const headers = new HttpHeaders();
    console.log("api called for upload end")
    // Send HTTP POST request with form data
    // bookDetails.append('bookImage', bookImage);
    return this.http.post<any>(this.addBookUrl, formData, { headers: headers });
  }
}