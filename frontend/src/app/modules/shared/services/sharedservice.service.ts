
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})



export class SharedserviceService {
  serverURL = environment.serverURL 


  constructor(private http: HttpClient) { }
  getMyBookings(){
    const {_id:tenantId}= JSON.parse(localStorage.getItem('userId') || '{}')
    return this.http.get(`${this.serverURL}api/shared/my-bookings/${tenantId}`)
    

  }
  notification(){  
    
    // const bookedRoomDetails= JSON.parse(localStorage.getItem('viewRoom') || '{}')
    const {_id:landLordId}= JSON.parse(localStorage.getItem('userId') || '{}')
    // const {landLordId:landLordId} = bookedRoomDetails;
    console.log("########### ",landLordId)

    //return this.http.get(`${this.serverURL}api/landlord/send-notification/6264110cfcd956fb7fdf8159`)
    return this.http.get(`${this.serverURL}api/landlord/send-notification/${landLordId}`)
  }
 
  changeOldPassword(data:any){
      const {_id} = JSON.parse(localStorage.getItem('userId')  || '{}')
      return this.http.patch(`${this.serverURL}api/shared/change-password/${_id}`,data)
  }

  getProfileDetails(){
    
    const {_id:id}= JSON.parse(localStorage.getItem('userId') || '{}')
    return this.http.get(`${this.serverURL}api/shared/profile-details/${id}`)
  }

  userProfile(id:any){
    
    return this.http.get(`${this.serverURL}api/shared/profile-details/${id}`)
  }
  editUserDetails(data:any){
    const {_id:userId}= data
      return this.http.put(`${this.serverURL}api/shared/edit-user/${userId}`,data)
  }
  

}
