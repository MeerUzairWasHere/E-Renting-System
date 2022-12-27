import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { RentService } from '../../services/rent.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  totalRooms:any
  approvedRooms:any
  pendingRooms:any
  constructor(private route:Router, private RentService: RentService,private router:ActivatedRoute) { }

  ngOnInit(): void {
     this.getTotalRooms()
     this.roomsApproved()
     this.getpendingRooms()
  }

  getTotalRooms(){
    this.RentService.getTotalRooms().subscribe((res:any)=>{
      this.totalRooms = Object.keys(res).length
    })
  }

  roomsApproved(){
    this.RentService.roomsApproved().subscribe((res:any)=>{
        this.approvedRooms = Object.keys(res).length
    })
  }

  getpendingRooms(){
    this.RentService.getpendingRooms().subscribe((res:any)=>{
      this.pendingRooms = Object.keys(res).length
    })
  }


}
