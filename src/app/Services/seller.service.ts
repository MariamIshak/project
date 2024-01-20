import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APIResult } from '../Models/APIResult';
import { Seller } from '../Models/Seller';
@Injectable({
  providedIn: 'root'
})
export class SellerService {

  constructor(private http:HttpClient) { }
  Path ='http://localhost:4000'
 
    
  
  getSellersList(){
    return this.http.get<APIResult>(this.Path+'/user/getallseller');

  }
  deleteSeller(id:string){
    return this.http.delete<APIResult>(this.Path+'/user/'+id);
  }
}
