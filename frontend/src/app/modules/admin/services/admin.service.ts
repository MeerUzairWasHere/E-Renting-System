import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({ 
  providedIn: 'root'
})
export class AdminService {
  serverURL = environment.serverURL
  constructor(private http:HttpClient) { }

  getViewRoomDetails(id:any){
    return this.http.get(`${this.serverURL}api/tenant/view-room-details/${id}`)
  }

  getLandLords(){ 
    return this.http.get(`${this.serverURL}api/admin/get-landlords`)
  }
  
  
  getTenants(){
    return this.http.get(`${this.serverURL}api/admin/get-tenants`)

  }
  
  
  getTotalOccupiedRooms()
{
    return this.http.get(`${this.serverURL}api/admin/get-occupied-rooms`)
  }

  getTotalAvailableRooms(){
    return this.http.get(`${this.serverURL}api/admin/get-available-rooms`)
  }

  getTenantInfo(){
    return this.http.get(`${this.serverURL}api/admin/tenant-details`)

  }
  getrentlist(){
    return this.http.get(`${this.serverURL}api/admin/rent-info`)
    
  }

  getLandlordlist(){
    return this.http.get(`${this.serverURL}api/admin/get-landlord-details`)

  }

  deleteLandLord(row:any){
    console.log('deletelandlord',row)
    const {_id:landLordId} = row
    return this.http.delete(`${this.serverURL}api/admin/remove-landlord/${landLordId}`)

  }

  
  addLandLord(userModel:any){
    return this.http.post(`${this.serverURL}api/admin/add-landlord`,userModel)

  }
   
  editLandLord(editUserModel:any){
    
    return this.http.put(`${this.serverURL}api/admin/update-landlord/${editUserModel._id}`,editUserModel)

  }

  addTenant(userModel:any){
    return this.http.post(`${this.serverURL}api/admin/add-tenant`,userModel)
    
  }

  

  editTenant(editUserModel:any){
    
    return this.http.put(`${this.serverURL}api/admin/edit-tenant/${editUserModel._id}`,editUserModel)
      
  }

  deleteTenantInfo(row:any){
    const {tenantId}= row
    console.log('tenantid',tenantId)
    return this.http.delete(`${this.serverURL}api/admin/remove-tenant/${tenantId._id}`)

  }

  editRentInfo(data:any){
      const {_id:roomId}  = data
    return this.http.put(`${this.serverURL}api/admin/edit-rent-info/${roomId}`,data)
  }
  
  deleteRentInfo(row:any){
    const {_id:roomId}= row
    return this.http.delete(`${this.serverURL}api/admin/delete-rent-info/${roomId}`)
  }

  getAllTenants(){
    return this.http.get(`${this.serverURL}api/admin/get-tenants`) 
  }
  
  deleteTenent(row:any){

    const {_id}= row
 
    return this.http.delete(`${this.serverURL}api/admin/remove-tenant/${_id}`)
  }

  editAllTenants(tenantDetails:any){

    const {_id}= tenantDetails
    return this.http.put(`${this.serverURL}api/admin/edit-all-tenant/${_id}`,tenantDetails)

  }

  roomTypesChart(){
    return this.http.get(`${this.serverURL}api/admin/room-types`)
  }

}
