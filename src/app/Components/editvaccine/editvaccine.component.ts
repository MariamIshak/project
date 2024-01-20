import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Vaccine } from 'src/app/Models/Vaccine';
import { VaccinesService } from 'src/app/Services/vaccines.service';
import { SnackbarComponent } from '../snackbar/snackbar.component';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-editvaccine',
  templateUrl: './editvaccine.component.html',
  styleUrls: ['./editvaccine.component.css']
})
export class EditvaccineComponent {

  editForm!: FormGroup;
  data!: FormData;
  id: string = "";
  vaccine!: Vaccine;
  constructor(
    private snackBar: MatSnackBar,
    private _fb: FormBuilder,
    private vaccineSrv: VaccinesService,
    private _dialogRef: MatDialogRef<EditvaccineComponent>,
  ) { }

  ngOnInit() {
    console.log(this._dialogRef._containerInstance._config.id)
    this.id = this._dialogRef._containerInstance._config.id ?? "";
    console.log(this.id)
    this.vaccineSrv.getVaccineByID(this.id).subscribe({
      next: (res) => {
        console.log(res)
        this.vaccine = res.data as Vaccine;
        this.buildForm();
      }
    });


  }

  // upload(dataa:any){
  //   this.data.append('img',dataa[0])
  // }

  buildForm() {
    this.editForm = this._fb.group({
      name: [this.vaccine.name, Validators.required],
      age: [this.vaccine.age, [Validators.required]],
     

     
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
    this.data = new FormData();
    console.log(this.data);
    for (const key in this.editForm.controls) {
      this.data.append(key, this.editForm.controls[key].value);
    }

    this.vaccineSrv.updateVaccine(this.editForm.value,this.id).subscribe({
      next: (res) => {
        console.log(this.editForm.value)
        if (res.status == 200) {
          this._dialogRef.close();
          this.openSnackBar('updated successfully')

        } else {
          console.error(res.message);
        }
      }
    });
  }
}


