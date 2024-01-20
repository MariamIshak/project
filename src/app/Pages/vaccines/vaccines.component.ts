import { Component ,OnInit,ViewChild  } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';  
import { VaccinesService } from 'src/app/Services/vaccines.service'
import { Vaccine } from 'src/app/Models/Vaccine';
import { AddvaccineComponent } from 'src/app/Components/addvaccine/addvaccine.component';
import { EditvaccineComponent } from 'src/app/Components/editvaccine/editvaccine.component';
import { SnackbarComponent } from '../../Components/snackbar/snackbar.component';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-vaccines',
  templateUrl: './vaccines.component.html',
  styleUrls: ['./vaccines.component.css'],
  
})
export class VaccinesComponent {
  displayedColumns: string[] = ['name','age','actions'];
  dataSource = new MatTableDataSource<Vaccine>();
  initialData:any;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngOnInit() {
    this.getVaccines();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  constructor(private _dialog:MatDialog ,private VaccineSrv:VaccinesService,private snackBar: MatSnackBar ){
  }
  openAddForm() {
    this._dialog.open(AddvaccineComponent).afterClosed().subscribe(()=>{
      this.getVaccines();

    });
  }
  openEditForm(id: string) { 
    console.log(id)
    this._dialog.open(EditvaccineComponent,{
      id:id
    }).afterClosed().subscribe(()=>{
      this.getVaccines();

    }) 
  }

  openSnackBar(message: string) {
    this.snackBar.openFromComponent(SnackbarComponent, {
      data: message,
      panelClass: 'snackbar',
      duration: 1000
    });
  }

  getVaccines(){
       this.VaccineSrv.getVaccinesList().subscribe({
        next: (res) => {
        this.initialData=res
          this.dataSource = new MatTableDataSource( this.initialData);
          this.dataSource.paginator = this.paginator;
        },
        error: console.log,
      });
    }
  
  deleteVaccine(id:string){
    this.VaccineSrv.deleteVaccine(id).subscribe({
      next: (res) => {
        this.getVaccines();
    this.openSnackBar('deleted successfully')         

      },
      error: console.log,
    });
  }
 
  
}




