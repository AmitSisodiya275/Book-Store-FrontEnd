import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-with-search',
  templateUrl: './header-with-search.component.html',
  styleUrls: ['./header-with-search.component.scss']
})
export class HeaderWithSearchComponent implements OnInit {

   personName:any;

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.personName= localStorage.getItem("name");
   }

  logout(){
    this.router.navigate(['login'])
    localStorage.removeItem("token");
    localStorage.removeItem("name");
  }
}
