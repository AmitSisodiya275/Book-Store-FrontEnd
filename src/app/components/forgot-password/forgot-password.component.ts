import { Component, OnInit } from '@angular/core';
import { FortgotPassword } from 'src/app/model/forgot-password';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  forgot:FortgotPassword = new FortgotPassword();

  constructor(private service:UserService) { }

  ngOnInit(): void {
  }

  forgotPassword(){
    this.service.forgotPassword(this.forgot).subscribe(
      data=>{ console.log(data)},
      error=>{ console.log(error)}
    );
  }
}
