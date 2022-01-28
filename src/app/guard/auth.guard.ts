import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { BookService } from '../service/book.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private service: BookService,private router: Router) {

  }
  canActivate() {
    if(this.service.isLoggedIn()) {
      return true;
    }
    this.router.navigate(['login']);
    return false;
    

  }
  
}
