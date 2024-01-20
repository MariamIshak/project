import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { VaccinesService } from '../../Services/vaccines.service';
import { SnackbarComponent } from '../snackbar/snackbar.component';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-addvaccine',
  templateUrl: './addvaccine.component.html',
  styleUrls: ['./addvaccine.component.css']
})
export class AddvaccineComponent {
  addForm: FormGroup;
  dataa: FormData= new FormData();
  startDate = new Date(1990, 0, 1);
  newUser = new FormControl('');
  
  constructor(
    private snackBar: MatSnackBar,
    private _fb: FormBuilder,
    private vaccineService: VaccinesService,
    private _dialogRef: MatDialogRef<AddvaccineComponent>
  ) {
    this.addForm = this._fb.group({
      name: ['', Validators.required],
      age: ['', [Validators.required]],
      
      // isEssential: ['', Validators.required],
     
    });
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
    console.log(this.addForm.value)


    this.vaccineService.addVaccine(this.addForm.value).subscribe({
      next: (res) => {
        console.log(res)
        if (res.status==201) {
          this._dialogRef.close();
          this.openSnackBar(res.message)         
        } else {
          console.error(res.message);
          // console.error(res);
        }
      }
    });
  }
}
