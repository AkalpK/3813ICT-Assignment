import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocketService } from '../service/socket.service';
import { io } from 'socket.io-client';
import { CommonModule } from '@angular/common';
import { DatabaseFilterService } from '../service/database-filter.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // Variable for storing global user data. 
  userName = ""; // Variable for storing user input.
  errorMessage = ""; // Message to inform user their credentials are incorrect.
  groups: any;
  database: any;
  ioConnection: any;


  constructor(private router: Router, private socketService: SocketService, private databaseFilter: DatabaseFilterService) { }

  ngOnInit(): void {
    this.initIoConnection();
    
  }

  // Function for testing username is valid and redirecting to dashboard.
  logIn() {
    for (let i = 0; i < this.database.users.length; i++) {
      if (this.userName == this.database.users[i].userName) {
        localStorage.setItem("loggedUser", JSON.stringify(this.userName));
        this.databaseFilter.setDatabase(this.database);
        this.router.navigateByUrl('dashboard');
      } else {
        this.errorMessage = "Error: User does not exist."
      }
    }
  }

  private initIoConnection() {
    this.socketService.initSocket();
    this.socketService.requestDatabase();
    this.socketService.pullDatabase();
    this.ioConnection = this.socketService.pullDatabase().subscribe(
      (data:any) => {
        this.database = data;
        
      }
    );
  }

}
