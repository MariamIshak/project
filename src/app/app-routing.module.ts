import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { LayoutComponent } from './Components/layout/layout.component';
import { AuthGuard } from './Guard/auth.guard';

const routes: Routes =  [
  {path:'',redirectTo:"login",pathMatch:"full"},
  {
    path: "", component: LayoutComponent, children: [
  {
    path: 'admin',
    loadChildren: () => import('./Pages/admin.module').then(m => m.AdminModule),
    canActivate: [AuthGuard]
  },
]
},
  { path: "login", component: LoginComponent },
  {path:"**",component:NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}