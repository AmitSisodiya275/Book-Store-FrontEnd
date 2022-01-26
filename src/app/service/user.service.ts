import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FortgotPassword } from '../model/forgot-password';
import { ResetPassword } from '../model/reset-password';
import { Token } from '../model/token';
import { User } from '../model/user';
import { UserLogin } from '../model/userlogin';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  baseUrl:string = environment.apiUrl;

  constructor(private http:HttpClient) { }

  registerUser(user:User):Observable<User>{
    return this.http.post<User>(`${this.baseUrl}/registration`, user);
  }

  loginUser(model: UserLogin):Observable<Token>{
    return this.http.post<Token>(`${this.baseUrl}/login`, model);
  }

  forgotPassword(forgotPassword:FortgotPassword){
    return this.http.post(`${this.baseUrl}/forgot-password`, forgotPassword);
  }

  resetUserPassword(token:string, resetpassword:ResetPassword):Observable<Object>{
    return this.http.post(`${this.baseUrl}/resetpassword/${token}`, resetpassword);
  }

 
}
