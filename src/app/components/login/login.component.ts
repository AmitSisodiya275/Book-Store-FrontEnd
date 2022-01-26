import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Token } from 'src/app/model/token';
import { UserLogin } from 'src/app/model/userlogin';
import { UserService } from 'src/app/service/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  model:UserLogin = new UserLogin();
  fetchedToken:Token = new Token();

  constructor(private service:UserService , private router:Router) { }

  ngOnInit(): void {
    console.log(this.model)
  }
  loginUser() {
    this.service.loginUser(this.model).subscribe(
      data=>{ console.log(data) , this.fetchedToken = data,  localStorage.setItem( "token", this.fetchedToken.token), localStorage.setItem("name", this.fetchedToken.personName)},
      error=>{ console.log(error)}
    );

    this.router.navigate(['dashboard']);
    
  }

}
