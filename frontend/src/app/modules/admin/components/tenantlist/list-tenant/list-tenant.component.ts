import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../services/admin.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddTenantComponent } from '../add-tenant/add-tenant.component';
import { EditAllTenantsComponent } from './edit-all-tenants/edit-all-tenants.component';
import { UserProfileComponent } from 'src/app/modules/shared/components/user-profile/user-profile.component';


export interface listTenant {

  Name: string;
  address: string;
  phoneNo: string;
  email: string;
  action:string;

}

const ELEMENT_DATA: listTenant[] = [];


@Component({
  selector: 'app-list-tenant',
  templateUrl: './list-tenant.component.html',
  styleUrls: ['./list-tenant.component.scss']
})
export class ListTenantComponent implements OnInit {

  constructor(private adminService:AdminService,private route:Router,public dialog:MatDialog) { }

  ngOnInit(): void {

    this.getAllTenants()
    

  }

  displayedColumns:String[]=['Name','address','phoneNo','email','action']
  dataSource=ELEMENT_DATA;


  getAllTenants(){
    this.adminService.getAllTenants().subscribe((res: any) => {
      console.log('tenantinfo',res)
      this.dataSource = res;
  })
}

deleteTenent(row:any){
  this.adminService.deleteTenent(row).subscribe((res:any)=>{
      console.log('delete info',res)
      this.route.routeReuseStrategy.shouldReuseRoute = () => false;
      this.route.onSameUrlNavigation = 'reload';
      this.route.navigate(['/admindashboard'])

  })

}

getAddTenantDialog()
{
  this.dialog.open(AddTenantComponent)
}

editAllTenantDialog(row:any){
this.dialog.open(EditAllTenantsComponent,{
  data:row
})
}

tenantProfileDialog(row:any){
  console.log('tenent row',row)
     this.dialog.open(UserProfileComponent,{
       data:row
     })
   }

}