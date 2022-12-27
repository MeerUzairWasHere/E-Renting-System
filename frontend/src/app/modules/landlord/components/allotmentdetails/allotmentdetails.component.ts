import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

import { RentService } from '../../services/rent.service';
export interface listrent {

  firstName: string;
  lastName: string;
  roomNo: number;
  phoneNo: number;
  address: string;
  email: string;
  

}

 const USER_DATA: listrent[] = [];

@Component({
  selector: 'app-allotmentdetails',
  templateUrl: './allotmentdetails.component.html',
  styleUrls: ['./allotmentdetails.component.scss']
})
export class AllotmentdetailsComponent implements OnInit {

  constructor(private route: Router, private rentService: RentService) { }

  ngOnInit(): void {
    this.getallotmentdetails();
  }
  displayedColumns: string[] = ['firstName', 'lastName', 'roomNo', 'address', 'phoneNo', 'email'];
  dataSource = USER_DATA;
  getallotmentdetails(){
    this.rentService.getallotmentdetails().subscribe((res: any) => {
      console.log('allotment',res)
      this.dataSource = res;

  })
} 

}
