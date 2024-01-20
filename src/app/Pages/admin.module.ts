import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutComponent } from '../Components/layout/layout.component';
import { MainComponent } from './main/main.component';
import { MotherComponent } from './mother/mother.component';
import { PregnantComponent } from './pregnant/pregnant.component';
import { SellerComponent } from './seller/seller.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products/products.component';
import { BlogsComponent } from './blogs/blogs.component';
import { AdminComponent } from './admin/admin.component';
import { MotherChartsComponent } from '../Components/mother-charts/mother-charts.component';
import { SellerChartsComponent } from '../Components/seller-charts/seller-charts.component';
import { BlogsChartsComponent } from '../Components/blogs-charts/blogs-charts.component';
import { NgModule } from '@angular/core';
import { VaccinesComponent } from './vaccines/vaccines.component';
import { NotificationsComponent } from './notifications/notifications.component';
let AdminRoutes:Routes=[
  {path:"main",redirectTo:"main/mothercharts",pathMatch:'full'},

    {path:'main',component:MainComponent ,children:[
     {path:'mothercharts',component:MotherChartsComponent},
     {path:'sellercharts',component:SellerChartsComponent},
     {path:'blogcharts',component:BlogsChartsComponent},
    ]},
    {path:"mother",component:MotherComponent},
    {path:"pregnant",component:PregnantComponent},
    {path:"seller",component:SellerComponent},
    {path:"product",component:ProductsComponent},
    {path:"order",component:OrdersComponent},
    {path:"blog",component:BlogsComponent},
    {path:"admin",component:AdminComponent},
    {path:"vaccines",component:VaccinesComponent},
    {path:"notification",component:NotificationsComponent},
]

@NgModule({
  declarations: [
   
  ],
  imports: [
    RouterModule.forChild(AdminRoutes)
  ],
  exports:[
    RouterModule
  ]
})
export class AdminModule { }