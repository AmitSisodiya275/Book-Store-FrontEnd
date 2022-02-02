import { Component, OnInit } from '@angular/core';
import { UserProfile } from 'src/app/model/user-profile';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  token: string | null ="";
  model: UserProfile=new UserProfile;

  constructor(private service:UserService) { }

  ngOnInit(): void {

    this.getUserProfileData();
  }


  getUserProfileData() {
    this.token=localStorage.getItem('token');
    this.service.getUserProfile(this.token).subscribe(
      
      data=>{this.model=data},
      error=>{console.log(error)}

      
    );
  }

}
