import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  authModel: any = {};
  userDetails:any={}

  constructor(private authService: AuthService,private router:Router,private data:DataService) { }
  ngOnInit(): void {
  }
    login() {
      this.authService.login(this.authModel).subscribe((res:any) => {
      console.log(res)
      this.userDetails=res.user
      localStorage.setItem('userId', JSON.stringify(this.userDetails))
      localStorage.setItem('token',this.userDetails.token)

        this.data.setUserData(this.userDetails)

     if(this.userDetails?.role == 'admin')
    {
    this.router.navigate(['/admindashboard'])
    }
    if(this.userDetails?.role=='Tenant')
    {
      const navigationExtra={
        queryParams:{
          option:'Tenant'
          
          
        } 
      
      }
      
      this.router.navigate(['/rent-details-list'],navigationExtra)
      
    }
    if(this.userDetails?.role=='landlord')
    {
      {
        const navigationExtra={
          queryParams:{
            option:'landlord'
          
          }
        }
        
        
        this.router.navigate(['/dashboard'])
        
      }
    }
    },error=>{
      Swal.fire(error.error.message)
    },()=>{
      
    })
  }
}
 
    

  
  

