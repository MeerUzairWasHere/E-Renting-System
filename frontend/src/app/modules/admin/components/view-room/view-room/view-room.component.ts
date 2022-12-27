import {Inject, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import {AdminService} from '../../services/admin.service'
import { AdminService } from '../../../services/admin.service';
import Swal from 'sweetalert2';
import { DomSanitizer } from '@angular/platform-browser';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({ 
  selector: 'app-view-details',
  templateUrl: './view-room.component.html',
  styleUrls: ['./view-room.component.scss']
})
export class ViewRoomDetailsAdminComponent implements OnInit {
 
   roomDetails:any={}
   isBooked:boolean=false;
   userDetails:any={}
  isApproved:any={}
    imagePath:any=[]
    
        constructor(@Inject(MAT_DIALOG_DATA) public data:any, private adminservice:AdminService
                     ,private route:Router,private _sanitizer: DomSanitizer) { }
  
       

  ngOnInit(): void { 
    this.getViewRoomDetails(); 
    }
   getViewRoomDetails(){
     console.log("id of room is ",this.data._id)
    this.adminservice.getViewRoomDetails(this.data._id).subscribe((res:any) => {
      console.log("==== ",res)
      
      this.roomDetails = res
  
      
        res.image.forEach((image:any) => {
          this.imagePath.push(this._sanitizer.bypassSecurityTrustResourceUrl(`${image}`))
        });
        
        
       
      this.isBooked = res.booked;
      console.log(res.booked)
      
    },(error:any)=> {
      console.log(error)
     
    }, () => {
  
    })
  
  
  
  
   }
  }