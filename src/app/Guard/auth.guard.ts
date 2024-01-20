import { CanActivate , ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import{Injectable}from'@angular/core';
import { AccountService } from '../Services/account.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private accSrv:AccountService,private router:Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean  {
      let user = this.accSrv.getuser()
      if(user.token ==""||user.token==undefined){
        // console.log(route,state)
        alert("you need to sign in !!")
        // this.router.navigateByUrl('/login')
        this.router.navigate([
          '/login'])
        return false;
      }

      else
        return true;
  }
}