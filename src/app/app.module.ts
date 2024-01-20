import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { MainComponent } from './Pages/main/main.component';
import { MotherComponent } from './Pages/mother/mother.component';
import { PregnantComponent } from './Pages/pregnant/pregnant.component';
import { SellerComponent } from './Pages/seller/seller.component';
import { OrdersComponent } from './Pages/orders/orders.component';
import { ProductsComponent } from './Pages/products/products.component';
import { BlogsComponent } from './Pages/blogs/blogs.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { Chart } from 'chart.js';
import { MatGridListModule, MatGridTile } from '@angular/material/grid-list';
import { LoginComponent } from './Components/login/login.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutComponent } from './Components/layout/layout.component';
import { AdminComponent } from './Pages/admin/admin.component';
import { LoaderComponent } from './Components/loader/loader.component';
import { AddmotherComponent } from './Components/addmother/addmother.component';
import { AddproductComponent } from './Components/addproduct/addproduct.component';
import { EditproductComponent } from './Components/editproduct/editproduct.component';
import{AddblogComponent}from './Components/addblog/addblog.component';
import{EditblogComponent} from'./Components/editblog/editblog.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { LoaderInterceptor } from './interceptors/loader.interceptor';
import { MotherChartsComponent } from './Components/mother-charts/mother-charts.component';
import { SellerChartsComponent } from './Components/seller-charts/seller-charts.component';
import { BlogsChartsComponent } from './Components/blogs-charts/blogs-charts.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { VaccinesComponent } from './Pages/vaccines/vaccines.component';
import { AddvaccineComponent } from './Components/addvaccine/addvaccine.component';
import { EditvaccineComponent } from './Components/editvaccine/editvaccine.component';
import { AddsellerComponent } from './Components/addseller/addseller.component';
import { AddpregnantComponent } from './Components/addpregnant/addpregnant.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { SnackbarComponent } from './Components/snackbar/snackbar.component';
import { AddadminComponent } from './Components/addadmin/addadmin.component';
import { NotificationsComponent } from './Pages/notifications/notifications.component';
import { AddnotificationComponent } from './Components/addnotification/addnotification.component';

@NgModule({
  declarations: [
    AppComponent,
    AddpregnantComponent,
    AddsellerComponent,
    NavbarComponent,
    SidebarComponent,
    MainComponent,
    MotherComponent,
    PregnantComponent,
    SellerComponent,
    OrdersComponent,
    ProductsComponent,
    BlogsComponent,
    LoginComponent,
    NotfoundComponent,
    LayoutComponent,
    AdminComponent,
    LoaderComponent,
    AddmotherComponent,
    AddproductComponent,
    EditproductComponent,
   AddblogComponent,
   EditblogComponent,
    MotherChartsComponent,
    SellerChartsComponent,
    BlogsChartsComponent,
    VaccinesComponent,
    AddvaccineComponent,
    EditvaccineComponent,
    SnackbarComponent,
    AddadminComponent,
    NotificationsComponent,
    AddnotificationComponent,
   
   
  ],
  imports: [
    MatSnackBarModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatGridListModule,
    MatPaginatorModule,
    MatIconModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatTableModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    MatGridTile,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
