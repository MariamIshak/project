import { Component } from '@angular/core';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from 'src/app/Services/account.service';
import { SnackbarComponent } from '../snackbar/snackbar.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  returnedUrl = "/main"
  constructor(private builder: FormBuilder,private accountSrv: AccountService,
    private router:Router,private activateRoute:ActivatedRoute,private snackBar: MatSnackBar,) {
    this.loginForm = this.builder.group({
      email: ['', [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    })
  }
  
  openSnackBar(message: string) {
    this.snackBar.openFromComponent(SnackbarComponent, {
      data: message,
      panelClass: 'snackbar',
      duration: 1000
    });
  }

  send() {
    if (this.loginForm.valid) {
      console.log('first')
// this part to send login data to make sure if the user is exist (Authentication)

// /////////i commented this part to make sure that any one can show the site without needing the backend responce ///////////

      // this.accountSrv.login(this.loginForm.controls["email"].value,this.loginForm.controls["password"].value).subscribe({
      //     next: (response) => {
      //       console.log('first')
      //       console.log(response)
      //       if(response.status==200){
            console.log('200')

              this.accountSrv.setuser("response.data.token","response.data.user","response.data.user.image")             
              this.router.navigateByUrl('/admin/main')
            }

            else {
            console.log('401')
              this.openSnackBar('response.message')
            }
          }
        }
//         })
//     }}
// }
