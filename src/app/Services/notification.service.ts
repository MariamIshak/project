import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APIResult } from '../Models/APIResult'; 
@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private http : HttpClient) { }
  Path ='http://localhost:4000'

   
  
  getNotificationsList(){
    return this.http.get<APIResult>(this.Path+'/notification/getAll');
  }
  
  // getNotificationByID(id:string){
  //   console.log(id)
  //   return this.http.get<APIResult>(this.Path+'/notification/'+id);
  // }
  addNotification(message: string,deletionTime:number) {
    console.log(message,deletionTime)
    return this.http.post<APIResult>(this.Path+'/notification/create', {message,deletionTime});
  }
  // updateNotification( updatedData: any,id: string){
  //   console.log(updatedData)
  //   return this.http.put<APIResult>(this.Path+'/notification/'+id, updatedData);
  // }
  
  deleteNotification(id:string){
    return this.http.delete<APIResult>(this.Path+'/notification/'+id);
  }
}
