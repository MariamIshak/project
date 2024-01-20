import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIResult } from '../Models/APIResult';

@Injectable({
  providedIn: 'root'
})
export class ChartsService {
  Path = 'http://localhost:4000'

  constructor(private http: HttpClient) { }
  // main page numbers 
  getUsers() {
    return this.http.get<APIResult>(this.Path + '/user/getallusersnum');
  }
  getBlogs() {
    return this.http.get<APIResult>(this.Path + '/blogs/get');
  }
  getProducts() {
    return this.http.get<APIResult>(this.Path + '/products/getAll');
  }
  getOrders() {
    return this.http.get<APIResult>(this.Path + '/orders/getAll');
  }
  getComments() {
    return this.http.get<APIResult>(this.Path + '/comments/comments');
  }
  getDailyVisits() {
    return this.http.get<APIResult>(this.Path + '/users/getAllMothers');
  }

  // charts 
  getMothers() {
    return this.http.get<APIResult>(this.Path + '/user/getallmothernum');

  }
  getSellers() {
    return this.http.get<APIResult>(this.Path + '/user/getallsellernum');
  }
  getPregnants() {
    return this.http.get<APIResult>(this.Path + '/user/getallpregnantnum');
  }

  getMothersPerDay() {
    return this.http.get<APIResult>(this.Path + '/charts/mothers-per-day');
  }

  getPregnantsPerDay() {
    return this.http.get<APIResult>(this.Path + '/charts/pregnant-per-day');
  }

  getSellersPerDay() {
    return this.http.get<APIResult>(this.Path + '/charts/seller-per-day');
  }
}
