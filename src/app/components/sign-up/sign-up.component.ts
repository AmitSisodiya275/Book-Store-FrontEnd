import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  model:User = new User();

  constructor(private service:UserService) { }

  ngOnInit(): void {
  }

  registerUser(){
    this.service.registerUser(this.model).subscribe(
      data=>{this.model= data},
      error=>(console.log(error))
    );
  }
}
