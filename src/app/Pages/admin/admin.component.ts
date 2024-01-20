import { OnInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AdminService } from 'src/app/Services/admin.service';
import { SnackbarComponent } from '../../Components/snackbar/snackbar.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AddadminComponent } from 'src/app/Components/addadmin/addadmin.component';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  displayedColumns: string[] = ['image', 'name', 'email', 'actions'];
  dataSource = new MatTableDataSource()
  initialData:any;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngOnInit() {
    this.getAdmins();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  constructor(private _dialog: MatDialog, private adminSrv: AdminService,private snackBar: MatSnackBar) {
  }
  openAddForm() {
    this._dialog.open(AddadminComponent).afterClosed().subscribe(()=>{
      this.getAdmins();
    });
  }
  openEditForm(id: string) { 
    console.log(id)
    // this._dialog.open(EditadminComponent,{
    //   id:id
    // }).afterClosed().subscribe(()=>{
    //   this.getAdmins();
    // })
  }
  openSnackBar(message: string) {
    this.snackBar.openFromComponent(SnackbarComponent, {
      data: message,
      panelClass: 'snackbar',
      duration: 1000
    });
  }

  getAdmins() {
    this.adminSrv.getAdminsList().subscribe({
      next: (res) => {
        this.initialData=res
        console.log(res)
        console.log(this.initialData)
        this.dataSource = new MatTableDataSource(this.initialData.admins);
        this.dataSource.paginator = this.paginator;
      },
      error: console.log,
    });
  }

deleteAdmin(id: string){
  this.adminSrv.deleteAdmin(id).subscribe({
    next: (res) => {
      this.getAdmins();
      this.openSnackBar('deleted successfully')         

    },
    error: console.log,
  });
}


}










