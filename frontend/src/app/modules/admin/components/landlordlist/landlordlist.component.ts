import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../../services/admin.service';
import { AddLandLordComponent } from './add-land-lord/add-land-lord.component';
import { EditLandLordComponent } from './edit-land-lord/edit-land-lord.component';
import { UserProfileComponent } from 'src/app/modules/shared/components/user-profile/user-profile.component';

export interface listrent {

  landlordName: string;
  // address: string;
  phoneNo: string;
  email: string;
  totalRooms: string;
  occupied: string;
  // available: string;
  action:string;

}

 const ELEMENT_DATA: listrent[] = [];

@Component({
  selector: 'app-landlordlist',
  templateUrl: './landlordlist.component.html',
  styleUrls: ['./landlordlist.component.scss']
})
export class LandlordlistComponent implements OnInit {
  setNavBar:Boolean=false;
     constructor( private adminService:AdminService,private route: Router,
      public dialog:MatDialog, private router:ActivatedRoute) {
      this.router.queryParams.subscribe((params=>{
        this.setNavBar = params['setNavBar'];
      }))
     }

  ngOnInit(): void {
    
    
    this.getLandlordlist(); 
    
  }


 
  
  displayedColumns:String[]=['landlordName', 'phoneNo','email','totalRooms','occupied','action']
  dataSource=ELEMENT_DATA;
  getLandlordlist(){
    this.adminService.getLandlordlist().subscribe((res: any) => {
      console.log('landlordinfo',res)
  
      this.dataSource = res;
  })
  
}

landlordProfile(row:any)

  {
    // row.user='landlord'
    this.dialog.open(UserProfileComponent,{
      data:row 
    })
  }

deleteLandLord(row:any){
  this.adminService.deleteLandLord(row).subscribe((res:any)=>{
    console.log(res)

    this.route.routeReuseStrategy.shouldReuseRoute = () => false;
    this.route.onSameUrlNavigation = 'reload';
    this.route.navigate(['/admindashboard'])

    
  })
}



addLandlordDialog(){
  //  this.route.navigate(['/register']); 
  this.dialog.open(AddLandLordComponent) 

  }

  
   editLandLordDialog(row:any){
    const editedData=  this.dialog.open(EditLandLordComponent,{
      data: row
    })
   }

}   
