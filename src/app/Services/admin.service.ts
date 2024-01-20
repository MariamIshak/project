import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APIResult } from '../Models/APIResult';
import { Admin } from '../Models/Admin';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  Path ='http://localhost:4000'
  
  constructor(private http:HttpClient) { 
}
  getAdminsList(){
    return this.http.get<APIResult>(this.Path+'/user/getalladmins');
  }
  deleteAdmin(id:string){
    return this.http.delete<APIResult>(this.Path+'/user/'+id);
  }

}

