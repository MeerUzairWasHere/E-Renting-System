// import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class DataService {
 userdetails:any={}
  constructor() { 
    this.userdetails={}
  }
  setUserData(val:any)
  {
    this.userdetails=val;
    console.log(this.userdetails)
  }
    getUserData()
  {
    return this.userdetails;
  }
}