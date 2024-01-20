import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIResult } from '../Models/APIResult'; 
import { Vaccine } from '../Models/Vaccine';
@Injectable({
  providedIn: 'root'
})
export class VaccinesService {

  constructor(private http : HttpClient) { }
  Path ='http://localhost:4000'

  
  
  getVaccinesList(){
    return this.http.get<APIResult>(this.Path+'/vaccination/getAll');
  }
  
  getVaccineByID(id:string){
    console.log(id)
    return this.http.get<APIResult>(this.Path+'/vaccination/'+id);
  }
  addVaccine(data: any) {
    return this.http.post<APIResult>(this.Path+'/vaccination/add', data);
  }
  updateVaccine( updatedData: any,id: string){
    console.log(updatedData)
    return this.http.put<APIResult>(this.Path+'/vaccination/'+id, updatedData);
  }
  
  deleteVaccine(id:string){
    return this.http.delete<APIResult>(this.Path+'/vaccination/'+id);
  }
}
