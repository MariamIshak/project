import { Component, OnInit } from '@angular/core';
import { ChartsService } from 'src/app/Services/charts.service';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {
 
  public comments: any;
  public users: any;
  public blogs: any;
  public orders: any;
  public sales: any;
  public visits: any;



  constructor(private chartSrv: ChartsService) { }
  ngOnInit() {
   
    this.chartSrv.getUsers().subscribe((response) => {
      this.users= response;
      console.log(response,"users")

      })
    this.chartSrv.getBlogs().subscribe((response) => {
      console.log(response,"blogs")
        this.blogs = response.data as Array<any>;
        })
    this.chartSrv.getComments().subscribe((response) => {
      console.log(response,"comments")

      this.comments = response.data as Array<any>;
    })
    // this.chartSrv.getDailyVisits().subscribe((response) => {
    //   this.visits = response;
    // })
    this.chartSrv.getOrders().subscribe((response) => {
      console.log(response,"ordera")

      this.orders = response.data  as Array<any>;
     
    })
    this.chartSrv.getProducts().subscribe((response) => {
      const prd = response as unknown as Array<any> ;
      this.sales =prd.length
      console.log(this.sales,"sales")
      console.log(this.sales.length,"sales")
      
    })

  }
}