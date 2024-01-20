import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './Components/layout/layout.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { AddadminComponent } from './Components/addadmin/addadmin.component';
import { AddmotherComponent } from './Components/addmother/addmother.component';
import { AddblogComponent } from './Components/addblog/addblog.component';
import { AddproductComponent } from './Components/addproduct/addproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    NavbarComponent,
    SidebarComponent,
    AddadminComponent,
    AddmotherComponent,
    AddblogComponent,
    AddproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
