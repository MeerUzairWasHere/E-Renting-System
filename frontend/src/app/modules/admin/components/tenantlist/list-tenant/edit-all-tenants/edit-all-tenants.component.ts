import { Component, OnInit,Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/modules/admin/services/admin.service';

@Component({
  selector: 'app-edit-all-tenants',
  templateUrl: './edit-all-tenants.component.html',
  styleUrls: ['./edit-all-tenants.component.scss']
})
export class EditAllTenantsComponent implements OnInit {
  tenantDetails:any= this.data
  constructor(@Inject(MAT_DIALOG_DATA) public data:any , private adminService:AdminService,private route:Router) { }

  ngOnInit(): void {
    console.log(this.data)  

  }

  editAllTenants(form:NgForm){
    const postTenantData = form.value
   postTenantData._id = this.data._id
    this.adminService.editAllTenants(postTenantData).subscribe((res:any)=>{
        console.log(res)
        this. tenantDetails = res
        this.route.routeReuseStrategy.shouldReuseRoute = () => false;
        this.route.onSameUrlNavigation = 'reload';
        this.route.navigate(['/list-all-tenants'])
    })
  }

}
