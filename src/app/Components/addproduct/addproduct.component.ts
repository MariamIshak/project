import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ProductService } from 'src/app/Services/product.service';
import { SnackbarComponent } from '../snackbar/snackbar.component';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {
  addForm: FormGroup;
  dataa: FormData= new FormData();
  newUser = new FormControl('');
  
  constructor(
    private snackBar: MatSnackBar,
    private _fb: FormBuilder,
    private productSrv: ProductService,
    private _dialogRef: MatDialogRef<AddproductComponent>,
  ) {
    this.addForm = this._fb.group({
      description:['',Validators.required],
      name: ['', Validators.required],
      stock: ['', Validators.required],
      price: ['', Validators.required],
      category: ['', Validators.required],
      seller: ['', Validators.required],
      rate: [''],
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
      console.log(this.dataa)
    }

    this.productSrv.addProduct(this.dataa).subscribe({
      next: (res) => {
        
        if (res.status==201) {
          this._dialogRef.close();
          this.openSnackBar('added successfully')         

        } else {
          console.error(res.message);
        }
      }
    });
  }
}
