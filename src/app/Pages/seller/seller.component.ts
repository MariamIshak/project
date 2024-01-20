import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { SellerService } from 'src/app/Services/seller.service';
import { Seller } from 'src/app/Models/Seller';
import { AddsellerComponent } from 'src/app/Components/addseller/addseller.component';
import { SnackbarComponent } from '../../Components/snackbar/snackbar.component';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {

  displayedColumns: string[] = ['image', 'name', 'email', 'age', 'phone', 'address', 'totalOrders', 'productsType', 'actions'];
  dataSource = new MatTableDataSource<Seller>();
  initialData: any;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngOnInit() {
    this.getSellers();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  constructor(private _dialog: MatDialog, private sellerSrv: SellerService,private snackBar: MatSnackBar ) {
  }
  openAddForm() {
    this._dialog.open(AddsellerComponent).afterClosed().subscribe(() => {
      this.getSellers();
    })
  };

  // openEditForm(id: string) {
  //   console.log(id)
  //   this._dialog.open(EditsellerComponent, {
  //     id: id
  //   }).afterClosed().subscribe(() => {
  //     this.getSellers();
  //   })
  // }
  openSnackBar(message: string) {
    this.snackBar.openFromComponent(SnackbarComponent, {
      data: message,
      panelClass: 'snackbar',
      duration: 1000
    });
  }

  getSellers() {
    this.sellerSrv.getSellersList().subscribe({
      next: (res) => {
        this.initialData = res
        this.dataSource = new MatTableDataSource(this.initialData.sellers);
        this.dataSource.paginator = this.paginator;
      },
      error: console.log,
    });
  }

  deleteSeller(id: string) {
    this.sellerSrv.deleteSeller(id).subscribe({
      next: (res) => {
        this.getSellers();
        this.openSnackBar('deleted successfully')         

      },
      error: console.log,
    });
  }


}

