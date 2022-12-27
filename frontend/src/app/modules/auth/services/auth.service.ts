import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  serverURL = environment.serverURL
  constructor(private http: HttpClient) { }
  login(authModel: any) {
    return this.http.post(`${this.serverURL}api/auth/login`, authModel)
  }
  register(UserModel:any){
    console.log(UserModel)
    return this.http.post(`${this.serverURL}api/auth/SignUp`, UserModel)
  }
}
