import { Component ,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService, StoredUser } from 'src/app/Services/account.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html', 
  styleUrls: ['./navbar.component.css' , '../../../styles.css'],
})
export class NavbarComponent implements OnInit {
  msg:number=3;
  img:string=""
  constructor(private accSrv:AccountService,private router:Router){

  }
  ngOnInit() {
    let image =this.accSrv.getuser()
this.img=image.image
  }
  
   logout(){
    this.accSrv.logout()
    this.router.navigate(['/login'])
  
  }
}
