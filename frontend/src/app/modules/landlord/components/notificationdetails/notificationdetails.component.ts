import { Component, OnInit } from '@angular/core';
import { RentService } from '../../services/rent.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-notificationdetails',
  templateUrl: './notificationdetails.component.html',
  styleUrls: ['./notificationdetails.component.scss']
})
export class NotificationdetailsComponent implements OnInit {
    notifyModel:any={}
    roomBooked:any={}
  constructor(private rentservice:RentService,private router:Router) { }

  ngOnInit(): void {
    this.getTenantDetails()
  }
 getTenantDetails(){
  this.rentservice.getTenantDetails().subscribe((res:any) => {
    // console.log(res)
    this.notifyModel= res;
    console.log('notify',this.notifyModel)
    
  },error=> {
    console.log(error)
   
  }, () => {

  })
}

approveBooking(){
  this.rentservice.approveBooking().subscribe((res:any)=>{
    this.roomBooked = res

const navigationExtra={
  queryParams:{
    option:'landlord'
  }
}

    this.router.navigate(['/rent-details-list'],navigationExtra)
    
  })
}

rejectBooking(){
  this.rentservice.rejectBooking().subscribe((res:any)=>{
    console.log(res)
    const navigationExtra={
      queryParams:{
        option:'landlord'
      }
    }
    this.router.navigate(['/rent-details-list'],navigationExtra)
    
  })
}
}
