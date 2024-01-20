import { OnInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { AddmotherComponent } from 'src/app/Components/addmother/addmother.component';
import { MotherService } from 'src/app/Services/mother.service';
import { Mother } from 'src/app/Models/Mother';
import { SnackbarComponent } from '../../Components/snackbar/snackbar.component';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-mother',
  templateUrl: './mother.component.html',
  styleUrls: ['./mother.component.css'],
})
export class MotherComponent implements OnInit {
  displayedColumns: string[] = ['image','name', 'email', 'age','phone','address','actions'];
  dataSource = new MatTableDataSource<Mother>()
  initialData:any;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngOnInit() {
    this.getMothers();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  constructor(private _dialog: MatDialog, private motherSrv: MotherService,private snackBar: MatSnackBar,
    ) {
  }
  openAddForm() {
    this._dialog.open(AddmotherComponent).afterClosed().subscribe(()=>{
      console.log('first')
      this.getMothers();

    });
  }


  openSnackBar(message: string) {
    this.snackBar.openFromComponent(SnackbarComponent, {
      data: message,
      panelClass: 'snackbar',
      duration: 1000
    });
  }

  getMothers() {
    this.motherSrv.getMothersList().subscribe({
      next: (res) => {
        this.initialData=res
        // console.log(res)
        // console.log(this.initialData.mothers[1]._id)
        this.dataSource = new MatTableDataSource(this.initialData.mothers);
        this.dataSource.paginator = this.paginator;
      },
      error: console.log,
    });
  }

deleteMother(id: string){
  this.motherSrv.deleteMother(id).subscribe({
    next: (res) => {
      this.getMothers();
      this.openSnackBar('deleted successfully')         

    },
    error: console.log,
  });
}


}



