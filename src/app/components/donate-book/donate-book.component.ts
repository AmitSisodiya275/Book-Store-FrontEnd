import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donate-book',
  templateUrl: './donate-book.component.html',
  styleUrls: ['./donate-book.component.scss']
})
export class DonateBookComponent implements OnInit {


  bookname : string;
  bookauthor: string;
  statesList: string[] = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
    "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
    "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
    "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
    "Uttar Pradesh", "Uttarakhand", "West Bengal"
  ];
  selectedState: string = "";
  houseNo: string = "";
  road: string = "";
  city: string = "";
  pincode: string = ""; 


  constructor() { }

  ngOnInit(): void {
  }

}
