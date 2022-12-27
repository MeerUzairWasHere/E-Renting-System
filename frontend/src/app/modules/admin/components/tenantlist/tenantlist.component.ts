import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../../services/admin.service';
import { MatDialog } from '@angular/material/dialog';
import { AddTenantComponent } from './add-tenant/add-tenant.component';
import { EditTenantComponent } from './edit-tenant/edit-tenant.component';
import { UserProfileComponent } from '../../../shared/components/user-profile/user-profile.component'

export interface listrent {

  Name: string;
  LandLordId:Number,
  // address: string;
  phoneNo: string;
  email: string;
  roomNo:number;
  action:string;

}

 const ELEMENT_DATA: listrent[] = [];

@Component({
  selector: 'app-tenantlist',
  templateUrl: './tenantlist.component.html',
  styleUrls: ['./tenantlist.component.scss']
})
export class TenantlistComponent implements OnInit {

  constructor(private adminService:AdminService,private route:Router,public dialog:MatDialog) { }

  ngOnInit(): void {
    this.getTenantInfo();
  
  }


  displayedColumns:String[]=['Name','LandLordId','phoneNo','email','roomNo','action']
  dataSource=ELEMENT_DATA;
  
  
  getTenantInfo(){
    this.adminService.getTenantInfo().subscribe((res: any) => {
      console.log('tenantinfo',res)
  
      this.dataSource = res;
      
  })

}


tenantProfileDialog(row:any){
  // row.user="Tenant"
  this.dialog.open(UserProfileComponent,{
    data:row
  })
}

addTenantDialog(){
  // this.route.navigate(['/register']);
  this.dialog.open(AddTenantComponent)
     
 }

 editTenantDialog(row:any){
   this.dialog.open(EditTenantComponent,{
     data:row
   })
 }

 deleteTenantInfo(row:any){
   console.log(row)
    this.adminService.deleteTenantInfo(row).subscribe((res:any)=>{
      console.log(res)
      this.route.routeReuseStrategy.shouldReuseRoute = () => false;
      this.route.onSameUrlNavigation = 'reload';
      this.route.navigate(['/admindashboard'])
  
    })
 }


}