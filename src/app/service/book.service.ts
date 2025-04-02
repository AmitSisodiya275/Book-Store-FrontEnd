import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BookDetails } from 'src/app/model/book-details';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { AddBookDetails } from '../model/add-book';
import { AllBooks } from '../model/all-books';
@Injectable({
  providedIn: 'root'
})
export class BookService {

  apiUrl:String=environment.bookApiUrl;
  addBookUrl: String = environment.addBookApiUrl;
  public search=new BehaviorSubject<string>("");
  addBookDetails : AddBookDetails = new AddBookDetails();

  constructor(private http:HttpClient) { }

  getAllBooks(num:number) {
    return this.http.get<AllBooks>(`${this.apiUrl}/get-books/${num}`);
  }

  getBookById(id: number):Observable<BookDetails>{
    return this.http.get<BookDetails>(`${this.apiUrl}/getbook/${id}`);
  }

  isLoggedIn() {
    return !!localStorage.getItem('token');
  }

  deleteBook(id : number, token : string):Observable<number>{
    return this.http.get<number>(`${this.apiUrl}/delete-book/${token}/${id}`);
  }

  addBook(addBookDetails : AddBookDetails): Observable<any> {

    const formData = new FormData();

    formData.append("bookName", addBookDetails.bookName);
    formData.append("bookAuthor", addBookDetails.bookAuthor);
    formData.append("bookDescription", addBookDetails.bookDescription);
    formData.append("bookPrice", addBookDetails.bookPrice);
    formData.append("bookRating", addBookDetails.bookRating);
    formData.append("bookImages", addBookDetails.bookImages);
    formData.append("bookCategory", addBookDetails.bookCategory);
    formData.append("bookSampleChapter", addBookDetails.bookSampleChapter);
    formData.append("bookAvailableQuantity", addBookDetails.availableBookQuantity);
    formData.append("bookOriginalPrice", addBookDetails.originalPrice);
  
    console.log(formData.toString)
    return this.http.post(`${this.addBookUrl}`, formData); 
  }


}
