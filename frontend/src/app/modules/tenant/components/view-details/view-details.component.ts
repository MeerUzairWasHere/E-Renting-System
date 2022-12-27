
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TenantService } from '../../services/tenant.service';
import Swal from 'sweetalert2';
import { DomSanitizer } from '@angular/platform-browser';

@Component({ 
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.scss']
})
export class ViewDetailsComponent implements OnInit {
   
   roomDetails:any={}
   isBooked:boolean=false;
   userDetails:any={}
  isApproved:any={}
    imagePath:any=[]
   constructor(private tenantservice:TenantService,private route:Router,private _sanitizer: DomSanitizer) { }

  ngOnInit(): void { 
    
    this.getViewDetails();
    this.bookingDetails();
  
  }
  // back(){
  //   this.route.navigate(['/rent-details-list'])
  //   }
    

  // getViewDetails(){  ME
  //       this.tenantservice.getViewDetails().subscribe((res:any) => {
  //     console.log(res)
  //     this.roomDetails = res
  //     this.isBooked = res.booked;
  //     console.log(res.booked)
      
  //   },error=> {
  //     console.log(error)
     
  //   }, () => {

  //   })
  // }

  getViewDetails(){
    this.tenantservice.getViewDetails().subscribe((res:any) => {
    console.log(res)
    
    this.roomDetails = res

    
      res.image.forEach((image:any) => {
        this.imagePath.push(this._sanitizer.bypassSecurityTrustResourceUrl(`${image}`))
      });
      
      
     
    this.isBooked = res.booked;
    console.log(res.booked)
    
  },error=> {
    console.log(error)
   
  }, () => {

  })

}






  bookingDetails(){
    this.tenantservice.bookingDetails().subscribe((res:any)=>{
      console.log('booking details',res)
      this.isApproved = res
    
    })
  }

  applyBooking(){
    this.tenantservice.applyBooking().subscribe((res:any)=>{
      console.log(res)
      Swal.fire(res.info) 
      
      const userDetails = JSON.parse(localStorage.getItem('userId') || '')
       
      if(userDetails.role=='Tenant')
      {
        const navigationExtra={
          queryParams:{
            option:'Tenant'
            
            
          } 
        
        }
        
        this.route.navigate(['/rent-details-list'],navigationExtra)
        
      }
      if(userDetails.role=='landlord')
      {
        {
          const navigationExtra={
            queryParams:{
              option:'landlord'
            
            }
          }
          
          
          this.route.navigate(['/rent-details-list'],navigationExtra)
          
        }
      }
      
    })
  }
          

}