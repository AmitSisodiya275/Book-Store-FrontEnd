import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResetPassword } from 'src/app/model/reset-password';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  token!: string;
  resetPassword: ResetPassword = new ResetPassword();


  constructor(private route:ActivatedRoute, private service: UserService, private router: Router) { }

  ngOnInit(): void {

    this.token= this.route.snapshot.params['token'];
    console.log(this.token);
    console.log(this.resetPassword);
  }

  resetUserPassword(){
    this.service.resetUserPassword(this.token, this.resetPassword).subscribe(
        data=>{console.log(data), this.router.navigate([`login`]) },
        error=>{ console.log(error)}
    );
  }
}
