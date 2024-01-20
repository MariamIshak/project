import { OnInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NotificationService } from 'src/app/Services/notification.service';
import { Notification } from 'src/app/Models/Notification';
import { SnackbarComponent } from '../../Components/snackbar/snackbar.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AddnotificationComponent } from 'src/app/Components/addnotification/addnotification.component';
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  displayedColumns: string[] = ['_id','message', 'actions'];
  dataSource = new MatTableDataSource<Notification>()
  initialData: any;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngOnInit() {
    this.getNotifications();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  constructor(private _dialog: MatDialog, private notificationSrv: NotificationService, private snackBar: MatSnackBar,
  ) {
  }
  openAddForm() {
    this._dialog.open(AddnotificationComponent).afterClosed().subscribe(()=>{
      this.getNotifications();

    });
  }

  openSnackBar(message: string) {
    this.snackBar.openFromComponent(SnackbarComponent, {
      data: message,
      panelClass: 'snackbar',
      duration: 1000
    });
  }

  getNotifications() {
    this.notificationSrv.getNotificationsList().subscribe({
      next: (res) => {
        this.initialData = res
        console.log(res)
        // console.log(this.initialData.mothers[1]._id)
        this.dataSource = new MatTableDataSource(this.initialData);
        this.dataSource.paginator = this.paginator;
      },
      error: console.log,
    });
  }
  deleteNotification(id: string) {
    this.notificationSrv.deleteNotification(id).subscribe({
      next: (res) => {
        console.log(res)
        this.getNotifications();
        this.openSnackBar('deleted successfully')

      },
      error: console.log,
    });
  }


}





