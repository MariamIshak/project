import { Component ,OnInit,ViewChild  } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';  
import { MatSort } from '@angular/material/sort';
import {MatIconModule} from '@angular/material/icon';
import { BlogService } from 'src/app/Services/blog.service'
import { Blog } from 'src/app/Models/Blog';
import { AddblogComponent } from 'src/app/Components/addblog/addblog.component';
import { EditblogComponent } from 'src/app/Components/editblog/editblog.component';
import { SnackbarComponent } from '../../Components/snackbar/snackbar.component';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent {

  displayedColumns: string[] = ['title', 'content', 'image', 'author','comments'];
  dataSource = new MatTableDataSource<Blog>();
  initialData:any;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngOnInit() {
    this.getBlogs();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  constructor(private _dialog:MatDialog ,private blogSrv:BlogService,private snackBar: MatSnackBar){
  }
  openAddForm() {
    this._dialog.open(AddblogComponent).afterClosed().subscribe(()=>{
      this.getBlogs();
    });
  }
  openEditForm(id: string) { 
    console.log(id)
    this._dialog.open(EditblogComponent,{
      id:id
    }).afterClosed().subscribe(()=>{
      this.getBlogs();
    }) 
  }
  openSnackBar(message: string) {
    this.snackBar.openFromComponent(SnackbarComponent, {
      data: message,
      panelClass: 'snackbar',
      duration: 1000
    });
  }

  getBlogs(){
       this.blogSrv.getBlogsList().subscribe({
        next: (res) => {
        this.initialData=res
        console.log(res)
          this.dataSource = new MatTableDataSource(this.initialData);
          this.dataSource.paginator = this.paginator;
        },
        error: console.log,
      });
    }
  
  deleteBlog(id:string){
    this.blogSrv.deleteBlog(id).subscribe({
      next: (res) => {
        this.getBlogs();
        this.openSnackBar('deleted successfully')         
      },
      error: console.log,
    });
  }
 
  
 
}


