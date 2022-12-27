import { Component, OnInit } from '@angular/core';
import { SharedserviceService } from '../../services/sharedservice.service';

export interface MyBookingsComponent{
 landLordName:any;
  contact:any;
  // email:any
  roomTypes:any; 
  // roomNo:any;
  // pincode:any;
  // district:any;
  // landmark:any;
  approvalStatus:any;
  // bookedAt:any;
  // landLordChecked:any;
  
}
const ELEMENT_DATA: MyBookingsComponent[] = [];
@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.scss']
})
export class MyBookingsComponent implements OnInit {
  

  constructor(private sharedService:SharedserviceService) { }

  ngOnInit(): void {
    this.getMyBookings()
  }
  displayedColumns: string[] = ['landLordName', 'contact', 'roomTypes','approvalStatus'];
   dataSource = ELEMENT_DATA;
  getMyBookings(){
    select: 'roomTypes description roomNo pincode district city street state landmark'
    this.sharedService.getMyBookings().subscribe((res: any) => {
      
      this.dataSource=res
  })
  }
}
