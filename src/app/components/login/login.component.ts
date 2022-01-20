import { Component, OnInit } from '@angular/core';
import { UserLogin } from 'src/app/model/userlogin';
import { UserService } from 'src/app/service/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  model:UserLogin = new UserLogin();

  constructor(private service:UserService) { }

  ngOnInit(): void {

  }
  loginUser() {
    this.service.loginUser(this.model).subscribe(
      data=>{this.model=data},
      error=>(console.log(error))
    );
  }

}
