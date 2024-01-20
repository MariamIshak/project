import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { OrderService } from 'src/app/Services/order.service'
import { Order } from 'src/app/Models/Order';
import { SnackbarComponent } from '../../Components/snackbar/snackbar.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/Services/user.service';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {

  displayedColumns: string[] = ['name', 'userId', 'email', 'phone', 'clientAddress', 'totalAmount', 'products', 'orderedDate', 'status', 'actions'];
  dataSource = new MatTableDataSource<Order>();
  initialData: any[] = [];
  arr: any[] = [];

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngOnInit() {
    this.getOrders();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  constructor(private _dialog: MatDialog, private orderSrv: OrderService, private snackBar: MatSnackBar, private userSrv: UserService) {
  }
 
  editdelStatus(ord: any) {
    console.log(ord.delStatus)
    if (ord.delStatus === 'pending') {
      ord.delStatus = 'shipping'
      this.orderSrv.updateOrder(ord, ord._id).subscribe({
        next: (res) => {
          if (res.status == 200) {
            this.openSnackBar('updated status successfully')
          } else {
            console.error(res.message);
          }}
        })
        } else if(ord.delStatus === 'shipping') {
         console.log(ord.delStatus)
         ord.delStatus = 'delivered'
         console.log(ord)
         this.orderSrv.updateOrder(ord, ord._id).subscribe({
          next: (res) => {
            if (res.status == 200) {
              this.openSnackBar('updated status successfully')
            } else {
              console.error(res.message);
            }}
          })
      }

    }
    openSnackBar(message: string) {
      this.snackBar.openFromComponent(SnackbarComponent, {
        data: message,
        panelClass: 'snackbar',
        duration: 1000
      });
    }

    getOrders() {
      this.orderSrv.getOrdersList().subscribe({
        next: (res) => {
          console.log(res.data)
          this.initialData = res.data
          this.initialData.forEach(element => {
            console.log(element)
            this.userSrv.getUserByID(element.user).subscribe({
              next: (ans) => {
                console.log(ans.data)
                let name = ans.data.name
                let email = ans.data.email
                let phone = ans.data.phone
                let address=element.shippingAddress.city
                let street=element.shippingAddress.street
                this.arr.push({ ...element, name, email, phone,address,street })
                console.log({ ...element, name, email, phone,address,street })
                this.dataSource = new MatTableDataSource(this.arr);
                this.dataSource.paginator = this.paginator;
                console.log(this.arr)
              }
            })
          })
          // console.log(res.data)
        },
        error: console.log
      });
    }

    deleteOrder(id: string) {
      this.orderSrv.deleteOrder(id).subscribe({
        next: (res) => {
          this.orderSrv.getOrdersList().subscribe({
            next: (res) => {
              this.openSnackBar('deleted successfully')
              this.initialData = res.data
              this.dataSource = new MatTableDataSource(this.initialData);
              this.dataSource.paginator = this.paginator;
            },
            error: console.log,
          })
        }
      });
    }



  }



