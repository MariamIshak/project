import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIResult } from '../Models/APIResult';
@Injectable({
  providedIn: 'root'
})
export class PregnantService {

  Path ='http://localhost:4000';

  constructor ( private http: HttpClient){

  }
  getMothersList(){
    return this.http.get<APIResult>(this.Path+'/user/getallpregnants');
  }
  
deletePregnant(id:string){
  return this.http.delete<APIResult>(this.Path+'/user/'+id);

}
 
}
