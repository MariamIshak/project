import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APIResult } from '../Models/APIResult'; 
import { Order } from '../Models/Order';
import { Product } from '../Models/Product';
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }
  Path ='http://localhost:4000';

 
  
  getOrdersList(){
    return this.http.get<APIResult>(this.Path+'/orders/getAll');
  }
  getOrderByID(id:string){
    return this.http.get<APIResult>(this.Path+'/orders/'+id);
  }
  addOrder(data: any) {
    return this.http.post<APIResult>(this.Path+'/orders/add', data);
  }
  updateOrder( updatedData: any,id: string){
    return this.http.put<APIResult>(this.Path+'/orders/'+id, updatedData);
  }
  deleteOrder(id:string){
    return this.http.delete<APIResult>(this.Path+'/orders/'+id);
  }}


