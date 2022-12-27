import { Component,Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminService } from '../../../services/admin.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edit-tenant',
  templateUrl: './edit-tenant.component.html',
  styleUrls: ['./edit-tenant.component.scss']
})
export class EditTenantComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private adminService:AdminService,private route:Router) { }
     editUserModel:any=this.data
  
  ngOnInit(): void {
    console.log(this.data)
    console.log('edittenant',this.editUserModel.tenantId)
  }

  editTenant(){
    this.adminService.editTenant(this.editUserModel.tenantId).subscribe((res:any)=>{
      console.log(res)
    })
}

}
