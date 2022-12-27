
import {Inject, Component, OnInit  } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {SharedserviceService} from '../../services/sharedservice.service'
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  firstName:any;
  lastName:any;
  profilePicture:any;
  contact:any;
  email:any;
  role:any;
  address:any;
  id:any;
  param:any //will recive wheather landlord or tenant or admin from admin dashboard
  imageSrc = 'frontend\src\assets\profile.png'  
  
  constructor(@Inject(MAT_DIALOG_DATA )  public data:any,private sharedService:SharedserviceService,private route:Router,
  
  private _sanitizer: DomSanitizer) {}
   
  userProfileData:any=this.data
  ngOnInit(): void {
   
    console.log("data is ;;;;; ",this.userProfileData)
    //  if(this.userProfileData.user=="Landlord" )
    //  {
       
    //    this.id=this.userProfileData._id
    //  }
      if(this.userProfileData.role=="Tenant" || this.userProfileData.role=="landlord")
      this.id=this.userProfileData._id
     else{
      this.id=this.userProfileData.tenantId._id
     }
    this.userProfile()
  }
  
  userProfile(){
    
    this.sharedService.userProfile(this.id).subscribe((res:any)=>{
     
      res.forEach((obj:any)=>{
        console.log("obj is ",obj)
        this.firstName=obj.firstName;
        this.lastName=obj.lastName;
        this.role=obj.role;
        this.contact=obj.contact;
        this.email=obj.email
        this.address=obj.address
        if(obj.profilePicture)
        this.profilePicture=this._sanitizer.bypassSecurityTrustResourceUrl(`${obj.profilePicture}`)
        else
        this.profilePicture='assets/profile.jpg' 
       
      })
    })
  }
  
}
