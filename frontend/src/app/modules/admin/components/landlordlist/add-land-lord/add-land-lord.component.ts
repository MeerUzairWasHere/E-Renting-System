import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../services/admin.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-add-land-lord',
  templateUrl: './add-land-lord.component.html',
  styleUrls: ['./add-land-lord.component.scss']
})
export class AddLandLordComponent implements OnInit {
  userModel:any={}
  constructor(private adminService:AdminService,private route:Router,public dialog:MatDialog) { }

  ngOnInit(): void {
     
  }

  addLandLord(){
    // console.log(this.userModel)
    this.adminService. addLandLord(this.userModel).subscribe((res:any)=>{
      console.log('response add landlord',res)
      this.route.routeReuseStrategy.shouldReuseRoute = () => false;
      this.route.onSameUrlNavigation = 'reload';
      this.route.navigate(['/admindashboard'])
      
      
    })
    
  }


}
