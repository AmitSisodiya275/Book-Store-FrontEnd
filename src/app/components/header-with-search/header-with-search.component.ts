import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-header-with-search',
  templateUrl: './header-with-search.component.html',
  styleUrls: ['./header-with-search.component.scss']
})
export class HeaderWithSearchComponent implements OnInit {

   personName:any;
   public searchTerm:string='';
  constructor(private router:Router,private service:BookService) { }

  ngOnInit(): void {
    this.personName= localStorage.getItem("name");
   }

  logout(){
    this.router.navigate(['login'])
    localStorage.removeItem("token");
    localStorage.removeItem("name");
  }

  search(event:any) {
    this.searchTerm=(event.target as HTMLInputElement).value;
    this.service.search.next(this.searchTerm);
  }
}
