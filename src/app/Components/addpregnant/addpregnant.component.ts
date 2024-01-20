import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { UserService } from 'src/app/Services/user.service';
import { SnackbarComponent } from '../snackbar/snackbar.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-addpregnant',
  templateUrl: './addpregnant.component.html',
  styleUrls: ['./addpregnant.component.css']
})
export class AddpregnantComponent {
  addForm: FormGroup;
  dataa: FormData=new FormData();
  newUser = new FormControl('');
  
  constructor(
    private snackBar: MatSnackBar,
    private _fb: FormBuilder,
    private userSrv: UserService,
    private _dialogRef: MatDialogRef<AddpregnantComponent>,
  ) {
    this.addForm = this._fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      age: ['', Validators.required],
      address: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      dob: [''],
      numOfBaby:  ['', Validators.required],
      pregnancyMonth: ['', Validators.required],
      password:[''],
      role:['pregnant'],
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
    for (const key in this.addForm.controls) {
      this.dataa.append(key, this.addForm.controls[key].value);
    }

    this.userSrv.addUser(this.dataa).subscribe({
      next: (res) => {
        
        if (res.status==200) {
          this._dialogRef.close();
          this.openSnackBar('Mother added successfully')         

        } else {
          console.error(res.message);
        }
      }
    });
  }
  }

