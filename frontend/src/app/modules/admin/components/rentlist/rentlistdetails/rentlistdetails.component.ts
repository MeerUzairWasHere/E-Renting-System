import { Component,Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminService } from '../../../services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rentlistdetails',
  templateUrl: './rentlistdetails.component.html',
  styleUrls: ['./rentlistdetails.component.scss']
})
export class RentlistdetailsComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private adminService:AdminService,private route:Router) { }
  editRentDetails:any=this.data
  ngOnInit(): void {
   console.log(this.data)
  }

  editRentInfo(){
    this.adminService.editRentInfo(this.data).subscribe((res:any)=>{
          console.log('rent------>',res)
    })
  }
  

}
