import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { BlogService } from '../../Services/blog.service';
import { SnackbarComponent } from '../snackbar/snackbar.component';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-addblog',
  templateUrl: './addblog.component.html',
  styleUrls: ['./addblog.component.css']
})
export class AddblogComponent {
  addForm: FormGroup;
  dataa: FormData =new FormData();
  startDate = new Date(1990, 0, 1);
  newUser = new FormControl('');
  private _dialog: any;
  constructor(
    private snackBar: MatSnackBar,
    private _fb: FormBuilder,
    private _blogService: BlogService,
    private _dialogRef: MatDialogRef<AddblogComponent>
  ) {
    this.addForm = this._fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      comments: ['', Validators.required],
      content:['', Validators.required],
    });
  }

  upload(data: any) {
    // alert();
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

    this._blogService.addBlog( this.dataa).subscribe({
      next: (res) => {
        if (res.status==201) {
          this._dialogRef.close();
          this.openSnackBar(' added successfully')
        } else {
          console.error(res.message);
        }
      }
    });
  }
}

