import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RentService {
  serverURL = environment.serverURL


  constructor(private http: HttpClient) { }
  Addroom(AddModel:any){  
    return this.http.post(`${this.serverURL}api/landlord/add-rent-details`,AddModel)
  }
  Editroom(editRoomDetails:any){
    const {_id:userId} = editRoomDetails
    return this.http.put(`${this.serverURL}api/landlord/edit-rent-details/${userId}`,editRoomDetails)
  }
  getRentDetails() {
  
  const userDetails:any = JSON.parse(localStorage.getItem('userId')|| '{}') 

  if(userDetails?.role=='landlord'){
  return this.http.get(`${this.serverURL}api/landlord/get-all-rent-details/${userDetails._id}`)

  }else{
    return this.http.get(`${this.serverURL}api/tenant/get-tenant-rent-details`)

      }

  }
    
  
  deleteRentDetails(){
   const deletedRoom = JSON.parse(localStorage.getItem('deleteRoom') || '{}')
   const {_id:userId} = deletedRoom;
   return this.http.delete(`${this.serverURL}api/landlord/delete-rent-details/${userId}`)
  }


  getTenantDetails(){
    
    const {tenantId:userId} = JSON.parse(localStorage.getItem('bookingInfo') || '{}')
    // console.log('booking',userId)
    return this.http.get(`${this.serverURL}api/tenant/get-tenant-details/${userId}`)
  }

  approveBooking()
  {
    const {_id:bookingId} = JSON.parse(localStorage.getItem('bookingInfo') || '{}')

    return this.http.put(`${this.serverURL}api/landlord/approve-booking/${bookingId}`,{})
    
  }
  
rejectBooking(){
  const {_id:bookingId} = JSON.parse(localStorage.getItem('bookingInfo') || '{}')
  
  return this.http.delete(`${this.serverURL}api/landlord/reject-booking/${bookingId}`)
}

getChart(){
  const {_id:landLordId} = JSON.parse(localStorage.getItem('userId') || '{}')

  return this.http.get(`${this.serverURL}api/landlord/landLord-monthly-booking/${landLordId}`)
}

getTotalRooms(){

  const {_id:landLordId} = JSON.parse(localStorage.getItem('userId') || '{}')
  return this.http.get(`${this.serverURL}api/landlord/get-total-rooms/${landLordId}`)
  
}

roomsApproved(){
  const {_id:landLordId} = JSON.parse(localStorage.getItem('userId') || '{}')
  return this.http.get(`${this.serverURL}api/landlord/get-all-approved-rooms/${landLordId}`)

}

getpendingRooms(){
  const {_id:landLordId} = JSON.parse(localStorage.getItem('userId') || '{}')
  return this.http.get(`${this.serverURL}api/landlord/get-all-pending-rooms/${landLordId}`)
}


getallotmentdetails(){
  const {_id:landLordId} = JSON.parse(localStorage.getItem('userId') || '{}')
  return this.http.get(`${this.serverURL}api/landlord/get-tenant-booking-details/${landLordId}`)


}


getBookingDetails(){
  
  const {_id:landLordId} = JSON.parse(localStorage.getItem('userId') || '{}')

  return this.http.get(`${this.serverURL}api/landlord/get-booking-details/${landLordId}`)
}

}
