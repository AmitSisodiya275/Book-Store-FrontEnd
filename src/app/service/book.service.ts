import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { BookDetails } from 'src/app/model/book-details';
@Injectable({
  providedIn: 'root'
})
export class BookService {

  apiUrl:String=environment.apiUrl;

  constructor(private http:HttpClient) { }
  getAllBooks() {
    return this.http.get<[BookDetails]>(`${this.apiUrl}/books/getbooks`);
  }

}
