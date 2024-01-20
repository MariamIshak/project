import { Component,OnInit,ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';  
import { MatSort } from '@angular/material/sort';
import {MatIconModule} from '@angular/material/icon';
import { PregnantService } from 'src/app/Services/pregnant.service';
import { AddpregnantComponent } from 'src/app/Components/addpregnant/addpregnant.component';
import { Pregnant } from 'src/app/Models/Pregnant';
import { SnackbarComponent } from '../../Components/snackbar/snackbar.component';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-pregnant',
  templateUrl: './pregnant.component.html',
  styleUrls: ['./pregnant.component.css']
})
export class PregnantComponent implements OnInit {
  displayedColumns: string[] = ['image', 'name', 'email','pregnancyMonth', 'age','phone','address','actions'];
  dataSource = new MatTableDataSource<Pregnant>();
  initialData:any;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngOnInit() {
    this.getPregnants();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  constructor(private _dialog:MatDialog ,private pregnantSrv:PregnantService,private snackBar: MatSnackBar ){
  }
  openAddForm(){
    this._dialog.open(AddpregnantComponent).afterClosed().subscribe(()=>{
      this.getPregnants();
    });
  }
  // openEditForm(id: string) { 
  //   console.log(id)
  //   this._dialog.open(EditpregnantComponent,{
  //     id:id
  //   }).afterClosed().subscribe(()=>{
  //     this.getPregnants();
  //   }) 
  // }

  openSnackBar(message: string) {
    this.snackBar.openFromComponent(SnackbarComponent, {
      data: message,
      panelClass: 'snackbar',
      duration: 1000
    });
  }

  getPregnants(){
       this.pregnantSrv.getMothersList().subscribe({
        next: (res) => {
        this.initialData=res
        console.log(this.initialData)
        console.log(res)
          this.dataSource = new MatTableDataSource( this.initialData.pregnants);
          this.dataSource.paginator = this.paginator;
        },
        error: console.log,
      });
    }
  
  deletePregnant(id:string){
    this.pregnantSrv.deletePregnant(id).subscribe({
      next: (res) => {
        this.getPregnants();
        this.openSnackBar('deleted successfully')         

      },
      error: console.log,
    });
  }
 
  
 
}
