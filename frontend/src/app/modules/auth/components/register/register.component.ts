import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  UserModel:any={}
  formDoc:any;
  constructor(private authService: AuthService,private router: Router) { }
  ngOnInit(): void {}
    
  
  register(){
     this.authService.register(this.UserModel).subscribe((res) => {
      
         Swal.fire('Registered successfully');
         
        this.router.navigate(['/login'])
      
       
     },error=>{
          Swal.fire(error.error.message)
     },()=>{
          
     })
    
    }

    getBase64 = (file: any) => new Promise(function (resolve: any, reject: any) {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result)
      reader.onerror = (error: any) => reject('Error:', error);
    })



    changeProfileImg = (e: any) => {
      
     const file:any = e.target.files[0]
     let encoded;
     this.getBase64(file)
       .then((result) => {
         encoded = result;
         //this.AddModel.image.push(result)
         console.log(result)
         this.UserModel.profilePicture=result;
        
       })
       .catch(e => console.log(e))
   
 }





}



