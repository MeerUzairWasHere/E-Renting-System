import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../services/admin.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-tenant',
  templateUrl: './add-tenant.component.html',
  styleUrls: ['./add-tenant.component.scss']
})
export class AddTenantComponent implements OnInit {
  userModel:any={}
  constructor(private adminService:AdminService,private route:Router) { }

  ngOnInit(): void {
  }

  addTenant(){
    this.adminService.addTenant(this.userModel).subscribe((res:any)=>{
      console.log('response add tenent',res)
      this.route.routeReuseStrategy.shouldReuseRoute = () => false;
      this.route.onSameUrlNavigation = 'reload';
      this.route.navigate(['/list-all-tenants'])
    })
  }
  
}
