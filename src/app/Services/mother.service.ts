import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIResult } from '../Models/APIResult';
import { Mother } from '../Models/Mother';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MotherService {
  Path ='http://localhost:4000'
  mothers: BehaviorSubject<Mother[]>

  constructor(private http:HttpClient) { 
    this.mothers=new BehaviorSubject<Mother[]>([])
}
  getMothersList(){
    return this.http.get<APIResult>(this.Path+'/user/getallmothers');
  }
  deleteMother(id:string){
    return this.http.delete<APIResult>(this.Path+'/user/'+id);
  }

}
