import { Component,Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SharedserviceService } from '../../../services/sharedservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private sharedService:SharedserviceService,private route:Router) { }
  editUser:any=this.data
  ngOnInit(): void {
    console.log('edit user',this.data)
  }

  editUserDetails(){
     this.sharedService.editUserDetails(this.editUser).subscribe((res:any)=>{
        this.editUser = res
        console.log('edituserprofile',res)
        localStorage.setItem('userId',JSON.stringify(res))
        this.route.routeReuseStrategy.shouldReuseRoute = () => false;
    this.route.onSameUrlNavigation = 'reload';
    this.route.navigate(['/admindashboard'])
     })
  }


}
