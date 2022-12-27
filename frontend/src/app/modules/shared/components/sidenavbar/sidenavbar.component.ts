import { Component, OnInit, ViewChild , Input} from '@angular/core';
// ,AfterViewChecked,ElementRef
import { MatSidenav } from '@angular/material/sidenav';
import { SidenavService } from '../../services/sidenav.service';
import { Router } from '@angular/router';

//import { ThisReceiver } from '@angular/compiler';
import { DataService } from 'src/app/data.service';
// import { ListRentDetailsComponent } from 'src/app/modules/landlord/components/list-rent-details/list-rent-details.component';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import {SharedserviceService } from '../../services/sharedservice.service';


import { ChangePasswordComponent } from './change-password/change-password.component';
import { EditUserComponent } from './edit-user/edit-user.component';
// import { MyBookingsComponent } from '../my-bookings/my-bookings.component';




@Component({
  selector: 'app-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrls: ['./sidenavbar.component.scss']
})
export class SidenavbarComponent implements OnInit {

userDetails:any={};
profilePicture:any;
firstName:any;
lastName:any;
dashboard:boolean=false
isAdmin:boolean=false
dataLoaded:boolean=false
 //query param passed in order avoid two nav bars in admin dashboard
  navigationExtra={
  queryParams:{
    setNavBar:true
  } 
}

 @ViewChild('sidenav') public sidenav!: MatSidenav;
  
  constructor(private sidenavService: SidenavService ,private router: Router,private data:DataService,public dialog:MatDialog,
    private sharedService:SharedserviceService,private _sanitizer: DomSanitizer) {
      console.log("login cred!!!!!! ",this.userDetails)
  }

 
  rentList(){
     
     const roleDetails = JSON.parse(localStorage.getItem('userId') || '{}')
     console.log('rentlistdetails',roleDetails)
    if(roleDetails?.role=='Tenant')
    {
      const navigationExtra={
        queryParams:{
          option:'Tenant'
          
          
        } 
      
      }
      
      this.router.navigate(['/rent-details-list'],navigationExtra)
      
    }
    if(roleDetails.role=='landlord')
    {
      {
        const navigationExtra={
          queryParams:{
            option:'landlord'
          
          }
        }
        
        
        this.router.navigate(['/rent-details-list'],navigationExtra)
        
      }
    }
    
  }
  home(){
    this.router.navigate(['/home'])
  }
  myBookings(){
    console.log("booking called")
    this.router.navigate(['/my-bookings'])
    // this.router.navigate(MyBookingsComponent)
  }
  RentDetails()
  //navigation extra passed bkz other wise navbar was comming twice in admin dashboard
  {
    this.router.navigate(['/rentlist'],this.navigationExtra)
  }
  listLandlord(){ 
     //navigation extra passed bkz other wise navbar was comming twice in admin dashboard
    this.router.navigate(['/landlordlist'],this.navigationExtra)
  }
  
  ngOnInit():void 
  {
    this.getProfileDetails()
    this.dashboardValue()
  }  
  
  ngAfterViewInit(): void {
    this.sidenavService.setSidenav(this.sidenav);  
  }

  ngAfterViewChecked():void
  {
    this.userDetails=(this.data.getUserData());
    {
    console.log(this.userDetails);
    }
  }

  changePasswordDialog(){
        this.dialog.open(ChangePasswordComponent)
  }

  getProfileDetails(){
   this.sharedService.getProfileDetails().subscribe((res:any) => {
      console.log('response of profile',res)
      
      res.forEach((obj:any)=>{
       
          this.firstName=obj.firstName;
          this.lastName=obj.lastName;
         
          if(obj.profilePicture)
          this.profilePicture=this._sanitizer.bypassSecurityTrustResourceUrl(`${obj.profilePicture}`)
          else
          this.profilePicture='assets/profile.jpg' 
        })

  },(error:any)=> {
    console.log(error)
   
  }, () => {

  })

}

dashboardValue(){
  const {role} = JSON.parse(localStorage.getItem('userId') || '{}')
  if(role== 'admin' ){
    this.dashboard= true
    this.isAdmin=true
    console.log('isadmin',this.isAdmin)
    console.log('dasboard',this.dashboard)
  }
  else if(role=='landlord'){
    this.dashboard=true
  }
}
  
redirectDashboard()
{
  const {role} = JSON.parse(localStorage.getItem('userId') || '{}')
if(role == 'admin')
{
  this.router.navigate(['/admindashboard'])
}
else{
  this.router.navigate(['/dashboard'])
}

}


editUserDialog(){
  this.dialog.open(EditUserComponent,{
    data: JSON.parse(localStorage.getItem('userId') || '{}')
  })

}
}





