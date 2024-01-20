import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIResult } from '../Models/APIResult';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AccountService {
  Path ='http://localhost:4000'
  StoredUserSub:BehaviorSubject<StoredUser>
  constructor(private http:HttpClient) { 
    this.StoredUserSub = new BehaviorSubject<StoredUser>(this.getuser())
  }
  
  setuser(token:string, name:string,image:string){
    let user= {token:token,name:name,image:image} as StoredUser;
    localStorage.setItem("storedUser",JSON.stringify(user))
    this.StoredUserSub.next(user)
  }

  getuser():StoredUser{
    let check = localStorage.getItem("storedUser")
    if(check == null)
      return {token:"",name:"",image:""}
    else
      return JSON.parse(check)  as StoredUser
  }


  login( email:string,password:string){
    console.log('firsttttt')

    return this.http.post<APIResult>(this.Path+'/user/login',{password:password,email:email})
  }
  
  logout(){
    this.setuser("","","")
  }
}



export interface StoredUser{
  name:string;
  token:string;
  image:string;
  }
