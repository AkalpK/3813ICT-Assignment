import { Component, OnInit } from '@angular/core';
import { SocketService } from '../service/socket.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  messageContent: string = "";
  messages: string[] = [];
  database: any;

  ioConnection: any;

  constructor(private socketService: SocketService) { }

  ngOnInit(): void {
    this.initIoConnection();
  }

  // Clears local storage on logout.
  logOut() {
    localStorage.clear();
  }

  private initIoConnection() {
    this.socketService.initSocket();
    this.ioConnection = this.socketService.onMessage().subscribe(
      (message:string) => {
        // Add new message to the messages array.
        this.messages.push(message);
      });
  }


}
