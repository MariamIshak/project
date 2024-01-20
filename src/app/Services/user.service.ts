import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIResult } from '../Models/APIResult';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  Path ='http://localhost:4000'
  

  constructor(private _http:HttpClient) { }

  
  addUser(data: any){
    console.log(data)
    return this._http.post<APIResult>(this.Path+'/user/register', data);
  }
  updateUser( updatedData: any,id: string){
    return this._http.put<APIResult>(this.Path+'/user/'+id, {userId:id,updatedData:updatedData});
  }

  getUserByID(id:string) {
    return this._http.get<APIResult>(this.Path+'/user/'+id);
  }

 
}
