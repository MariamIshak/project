import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APIResult } from '../Models/APIResult';
import { Blog } from '../Models/Blog';
@Injectable({
  providedIn: 'root'
})
export class BlogService {
  Path ='http://localhost:4000' 

  blogs:Blog[]=[
    {
      title: 'String',
    content: 'String',
    image: 'String',
      author: 'string',
      comments:20
  }]
  constructor(private http:HttpClient) { }

  getBlogsList(){
    return this.http.get<APIResult>(this.Path+"/blogs/get");
  }
  getBlog(id:string){
    return this.http.get<APIResult>(this.Path+'/blogs/'+id);
  }
  addBlog(data: any) {
    return this.http.post<APIResult>(this.Path+'/blogs/add', data);
  }
  updateBlog( updatedData: any,id: string){
    return this.http.patch<APIResult>(this.Path+'/blogs/'+id, {blogId:id,updatedData:updatedData});
  }
  deleteBlog(id:string){
    return this.http.delete<APIResult>(this.Path+"/blogs/"+id);
  }
}
