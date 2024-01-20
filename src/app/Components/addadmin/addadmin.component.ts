import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { UserService } from '../../Services/user.service';
import { SnackbarComponent } from '../snackbar/snackbar.component';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-addadmin',
  templateUrl: './addadmin.component.html',
  styleUrls: ['./addadmin.component.css']
})
export class AddadminComponent {
  addForm: FormGroup;
  dataa: FormData=  new FormData(); ;
  startDate = new Date(1990, 0, 1);
  newUser = new FormControl('');
  
  constructor(
    private snackBar: MatSnackBar,
    private _fb: FormBuilder,
    private _userService: UserService,
    private _dialogRef: MatDialogRef<AddadminComponent>
  ) {
    this.addForm = this._fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password:  ['', Validators.required],
      role:  ['admin', Validators.required],
    });
  }

  upload(data: any) {
    this.dataa.append('image', data[0]);
    // console.log(data[0]);
    // console.log(this.dataa.get('image'));
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

    this._userService.addUser(this.dataa).subscribe({
      next: (res) => {
        console.log(res)
        if (res.status==200) {
          this._dialogRef.close();
          this.openSnackBar('Admin added successfully')         
        } else {
          console.error(res.message);
          // console.error(res);
        }
      }
    });
  }
}
