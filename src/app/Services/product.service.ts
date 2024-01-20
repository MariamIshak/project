import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APIResult } from '../Models/APIResult'; 
import { Product } from '../Models/Product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http :HttpClient) { }
  Path ='http://localhost:4000'

 
  
  getProductList(){
    return this.http.get<APIResult>(this.Path+'/products/getAll');
  }
  getProductByID(id:string){
    return this.http.get<APIResult>(this.Path+'/products/'+id);
  }
  addProduct(data: any) {
    return this.http.post<APIResult>(this.Path+'/products/add', data);
  }
  updateProduct( updatedData: any,id: string){
    return this.http.patch<APIResult>(this.Path+'/products/'+id, {productId:id,updatedData:updatedData});
  }
  deleteProduct(id:string){
    return this.http.delete<APIResult>(this.Path+'/products/'+id);
  }}
