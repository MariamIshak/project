import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { BlogService } from '../../Services/blog.service';
import { Blog } from 'src/app/Models/Blog';
import { Router, ActivatedRoute } from '@angular/router';
import { SnackbarComponent } from '../snackbar/snackbar.component';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-editblog',
  templateUrl: './editblog.component.html',
  styleUrls: ['./editblog.component.css']
})
export class EditblogComponent {
  addForm!: FormGroup;
  data!: FormData;
  startDate = new Date(1990, 0, 1);
  id: string = "";
  blogActive!: Blog;
  // newUser = new FormControl('');
  constructor(
    private snackBar: MatSnackBar,
    private _fb: FormBuilder,
    private _blogService: BlogService,
    private _dialogRef: MatDialogRef<EditblogComponent>,
    private activRoute: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    console.log(this._dialogRef._containerInstance._config.id)
    this.id = this._dialogRef._containerInstance._config.id ?? "";
    console.log(this.id)
    this._blogService.getBlog(this.id).subscribe({
      next: (res) => {
        console.log(res);
        console.log(res.data);
        this.blogActive = res.data as Blog;
        // console.log(res.data)
        this.buildForm();
      }
    });
  }

  // upload(dataa:any){
  //   this.data.append('img',dataa[0])
  // }

  buildForm() {
    this.addForm = this._fb.group({
      image: [this.blogActive.image],
      title: [this.blogActive.title, Validators.required],
      content: [this.blogActive.content, [Validators.required]],
      author: [this.blogActive.author, Validators.required],
      comments: [this.blogActive.comments, Validators.required],
      
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
    for (const key in this.addForm.controls) {
        this.data.append(key, this.addForm.controls[key].value);
    }

    this._blogService.updateBlog(this.addForm.value, this.id).subscribe({
      next: (res) => {
        if (res.status==200) {
          this._dialogRef.close();
          this.openSnackBar(' updated successfully')
        } else {
          console.error(res.message);
        }
      }
    });
  }
}
