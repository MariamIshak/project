import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Product } from 'src/app/Models/Product';
import { ProductService } from 'src/app/Services/product.service';
import { SnackbarComponent } from '../snackbar/snackbar.component';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent {
  editForm!: FormGroup;
  data!: FormData;
  id: string = "";
  Product!: Product;
  constructor(
    private snackBar: MatSnackBar,
    private _fb: FormBuilder,
    private productSrv: ProductService,
    private _dialogRef: MatDialogRef<EditproductComponent>,
  ) { }

  ngOnInit() {
    console.log(this._dialogRef._containerInstance._config.id)
    this.id = this._dialogRef._containerInstance._config.id ?? "";
    console.log(this.id)
    this.productSrv.getProductByID(this.id).subscribe({
      next: (res) => {
        console.log(res);
        console.log(res.data);
        this.Product = res.data as Product;
        // console.log(res.data)
        this.buildForm();
      }
    });


  }

  // upload(dataa:any){
  //   this.data.append('img',dataa[0])
  // }

  buildForm() {
    this.editForm = this._fb.group({
       // productPhoto:['',Validators.required],
       productName: [this.Product.name, Validators.required],
       stock: [this.Product.stock, [Validators.required]],
       price: [this.Product.price, Validators.required],
       category: [this.Product.category, Validators.required],
       seller: [this.Product.seller, Validators.required],
       rate: [this.Product.rate],
     
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
    console.log(this.editForm.value);
    for (const key in this.editForm.controls) {
      this.data.append(key, this.editForm.controls[key].value);
    }

    this.productSrv.updateProduct(this.editForm.value,this.id).subscribe({
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
