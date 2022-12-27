import { Component, OnInit } from '@angular/core';
import { SharedserviceService } from '../../../services/sharedservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  changePassword:any={}
  constructor( private sharedService: SharedserviceService ,private router: Router) { }

  ngOnInit(): void {
  }

  changeOldPassword(){
      this.sharedService.changeOldPassword(this.changePassword).subscribe((res:any)=>{
          console.log('password',res)
      })
  }

}
