import { Component, OnInit } from '@angular/core';
import { SocketService } from '../service/socket.service';
import { DatabaseFilterService } from '../service/database-filter.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  currentUser : any = localStorage.getItem("loggedUser");
  messages: string[] = [];
  database : string[] = [];
  groups = new Map<string, Array<string>>();
  rooms: string[] = [];

  ioConnection: any;

  constructor(private socketService: SocketService, private databaseFilter: DatabaseFilterService) { }

  ngOnInit(): void {
    console.log("test");

    this.initIoConnection();
    this.currentUser = JSON.parse(this.currentUser);

  }

  // Clears local storage on logout.
  logOut() {
    localStorage.clear();
  }

  public initIoConnection() {
    this.socketService.initSocket();
    this.socketService.requestDatabase();
    this.socketService.pullDatabase();
    this.ioConnection = this.socketService.pullDatabase().subscribe(
      (data:any) => {
        for (let i = 0; i < data.groups.length; i++) {

          if (data.groups[i].members.includes(this.currentUser)){
            this.groups.set(data.groups[i].groupName, data.groups[i].ownedRooms);
          }
        }
      }
    );
  }


}
