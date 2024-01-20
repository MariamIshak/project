import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ProductService } from 'src/app/Services/product.service'
import { Product } from 'src/app/Models/Product';
import { AddproductComponent } from 'src/app/Components/addproduct/addproduct.component';
import { EditproductComponent } from 'src/app/Components/editproduct/editproduct.component';
import { SnackbarComponent } from '../../Components/snackbar/snackbar.component';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  displayedColumns: string[] = ['productPhoto', 'productName', 'category', 'price', 'stock', 'rate', 'seller', 'actions'];
  dataSource = new MatTableDataSource<Product>();
  initialData: any;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngOnInit() {
    this.getProducts();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  constructor(private _dialog: MatDialog, private productSrv: ProductService, private snackBar: MatSnackBar) {
  }
  openAddForm() {
    this._dialog.open(AddproductComponent).afterClosed().subscribe(() => {
      this.getProducts();

    });
  }
  openEditForm(id: string) {
    console.log(id)
    this._dialog.open(EditproductComponent, {
      id: id
    }).afterClosed().subscribe(() => {
      this.getProducts();

    })
  }
  openSnackBar(message: string) {
    this.snackBar.openFromComponent(SnackbarComponent, {
      data: message,
      panelClass: 'snackbar',
      duration: 1000
    });
  }

  getProducts() {
    this.productSrv.getProductList().subscribe({
      next: (res) => {
        this.initialData = res
        console.log(res)
        this.dataSource = new MatTableDataSource(this.initialData);
        this.dataSource.paginator = this.paginator;
      },
      error: console.log,
    });
  }

deleteProduct(id: string){
  this.productSrv.deleteProduct(id).subscribe({
    next: (res) => {
      this.getProducts();
      this.openSnackBar('deleted successfully')

    },
    error: console.log,
  });
}
}







