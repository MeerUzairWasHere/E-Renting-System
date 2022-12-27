import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RentService } from '../../services/rent.service';

export interface listrent {

  tName: string;
  
  roomNo: string;
  status: string;

}

 const ELEMENT_DATA: listrent[] = [];

@Component({
  selector: 'app-roomdetails',
  templateUrl: './roomdetails.component.html',
  styleUrls: ['./roomdetails.component.scss']
})

export class RoomdetailsComponent implements OnInit {

  constructor(private route: Router, private rentService: RentService) { }

  ngOnInit(): void {
    this.getBookingDetails()
  }

  displayedColumns: string[] = ['firstName', 'roomNo', 'approvalStatus'];
   dataSource = ELEMENT_DATA;
  
 
  getBookingDetails(){
    this.rentService.getBookingDetails().subscribe((res:any)=>{
      this.dataSource=res
      console.log(this.dataSource)
    })
  }
  

}
