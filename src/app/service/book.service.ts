import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { BookDetails } from 'src/app/model/book-details';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BookService {

  apiUrl:String=environment.bookApiUrl;

  constructor(private http:HttpClient) { }

  getAllBooks() {
    return this.http.get<[BookDetails]>(`${this.apiUrl}/getbooks`);
  }

  getBookById(id: number):Observable<BookDetails>{
    return this.http.get<BookDetails>(`${this.apiUrl}/getbook/${id}`);
  }

}
