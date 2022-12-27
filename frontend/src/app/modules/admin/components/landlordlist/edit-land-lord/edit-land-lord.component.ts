import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AdminService } from '../../../services/admin.service';


@Component({
  selector: 'app-edit-land-lord',
  templateUrl: './edit-land-lord.component.html',
  styleUrls: ['./edit-land-lord.component.scss']
})
export class EditLandLordComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private adminService:AdminService,private route:Router) { }
editUserModel:any=this.data
 editLandLordDetails:any={}

  ngOnInit(): void {
    console.log('this.data',this.data)
    console.log('editUserModel',this.editUserModel)
  }
 
 
  editLandLord(form:NgForm){
   const postLandLordData = form.value
   postLandLordData._id = this.data._id
    // console.log('formValue',form.value)
      this.adminService.editLandLord(postLandLordData).subscribe((res:any)=>{
        console.log('response',res)
        this.editUserModel = res
      
    this.route.routeReuseStrategy.shouldReuseRoute = () => false;
    this.route.onSameUrlNavigation = 'reload';
    this.route.navigate(['/admindashboard'])
      })
}


}
