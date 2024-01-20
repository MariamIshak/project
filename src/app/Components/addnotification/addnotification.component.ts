import { Component } from '@angular/core';
  import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
  import { MatDialogRef } from '@angular/material/dialog';
  import { SnackbarComponent } from '../snackbar/snackbar.component';
  import { MatSnackBar } from '@angular/material/snack-bar';
import { NotificationService } from 'src/app/Services/notification.service';
@Component({
  selector: 'app-addnotification',
  templateUrl: './addnotification.component.html',
  styleUrls: ['./addnotification.component.css']
})
export class AddnotificationComponent {
  
    addForm: FormGroup;
    newUser = new FormControl('');
    
    constructor(
      private snackBar: MatSnackBar,
      private _fb: FormBuilder,
      private notificationSrv: NotificationService,
      private _dialogRef: MatDialogRef<AddnotificationComponent>
    ) 
    {
      this.addForm = this._fb.group({
        message: ['', Validators.required],
        deletionTime: ['', Validators.required],
      
      });
    }
  
  // displaying snack bar 
    openSnackBar(message: string) {
      this.snackBar.openFromComponent(SnackbarComponent, {
        data: message,
        panelClass: 'snackbar',
        duration: 1000
      });
    }
  
    onFormSubmit(): void {
      // console.log(this.addForm.value);
      // console.log(this.dataa);
      // this.dataa= new FormData();
      // for (const key in this.addForm.controls) {
      //   this.dataa.append(key, this.addForm.controls[key].value);
      // }
  
      this.notificationSrv.addNotification(this.addForm.value.message,this.addForm.value.deletionTime).subscribe({
        next: (res) => {
          console.log(res);
          if (res.status == 200) {
            this._dialogRef.close();
            this.openSnackBar('added successfully');
          } else {
            console.error(res.message);
          }
        }
      });
    }
  }
