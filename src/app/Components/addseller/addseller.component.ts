import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { UserService } from 'src/app/Services/user.service';
import { SnackbarComponent } from '../snackbar/snackbar.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-addseller',
  templateUrl: './addseller.component.html',
  styleUrls: ['./addseller.component.css']
})
export class AddsellerComponent {
  addForm: FormGroup;
  dataa: FormData=new FormData();
  startDate = new Date(1990, 0, 1);
  newUser = new FormControl('');
  
  constructor(
    private snackBar: MatSnackBar,
    private _fb: FormBuilder,
    private userSrv: UserService,
    private _dialogRef: MatDialogRef<AddsellerComponent>
  ) {
    this.addForm = this._fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      age: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required],
    productsType: [''],
    totalOrders: [''],
      image:[''],
      password:[''],
      role:['seller', Validators.required],
    });
  }

  upload(data: any) {
    this.dataa.append('image', data[0]);
    console.log(data[0]);
    console.log(this.dataa.get('image'));
  }

  openSnackBar(message: string) {
    this.snackBar.openFromComponent(SnackbarComponent, {
      data: message,
      panelClass: 'snackbar',
      duration: 1000
    });
  }

  onFormSubmit(): void {
    console.log(this.addForm.value)
    for (const key in this.addForm.controls) {
      this.dataa.append(key, this.addForm.controls[key].value);
    }
   
    this.userSrv.addUser(this.dataa).subscribe({
      next: (res) => {
        if (res.status==200) {
          this._dialogRef.close();
          this.openSnackBar('Seller added successfully')         

        } else {
          console.error(res.message);
        }
      }
    });
  }
}

