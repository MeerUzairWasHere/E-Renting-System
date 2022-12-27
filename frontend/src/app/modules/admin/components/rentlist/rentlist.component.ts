import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { AdminService } from '../../services/admin.service';
import { MatDialog } from '@angular/material/dialog';
import {RentlistdetailsComponent} from './rentlistdetails/rentlistdetails.component'
import { ViewRoomDetailsAdminComponent } from '../view-room/view-room/view-room.component';


export interface listrent {

  phoneNo: Number;
  landlordName: string;
  location: string;
  roomType: string;
  action:string;

}

 const ELEMENT_DATA: listrent[] = [];


@Component({
  selector: 'app-rentlist',
  templateUrl: './rentlist.component.html',
  styleUrls: ['./rentlist.component.scss']
})
export class RentlistComponent implements OnInit {
  setNavBar:Boolean=false;
  constructor(private adminService:AdminService,private route:Router,private router:ActivatedRoute,public dialog:MatDialog) { 
    this.router.queryParams.subscribe((params=>{
      this.setNavBar = params['setNavBar'];
    }))
  }

  ngOnInit(): void {
    this.getrentlist();
  }
  displayedColumns:String[]=['landlordName','location','roomType','phoneNo','action']
  dataSource=ELEMENT_DATA;

  viewRentRoomDetails(row:any){
    row.user="admin"
    this.dialog.open(ViewRoomDetailsAdminComponent,{
      data:row 
    })
  }


  getrentlist(){
    this.adminService.getrentlist().subscribe((res: any) => {
      console.log('rentinfo',res)
  
      this.dataSource = res;
  })
}

editRentDialog(row:any){
this.dialog.open(RentlistdetailsComponent,{
  data:row
})
}

deleteRentInfo(row:any){
  this.adminService.deleteRentInfo(row).subscribe((res:any)=>{
    console.log(res)
    this.route.routeReuseStrategy.shouldReuseRoute = () => false;
      this.route.onSameUrlNavigation = 'reload';
      this.route.navigate(['/admindashboard'])
  })
}

}
