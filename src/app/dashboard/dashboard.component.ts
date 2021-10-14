import { Component, OnInit } from '@angular/core';
import { SocketService } from '../service/socket.service';
import { UserDataService } from '../service/user-data.service';
import { Router } from '@angular/router';
import { Group } from '../model/group.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  userId: any = localStorage.getItem("userID"); // Get the user information
  groups: Group[] = []; // For storing all Group objects.

  constructor(private userDataService: UserDataService, private socketService: SocketService) { }

  ngOnInit(): void {
    this.userId = JSON.parse(this.userId);
    this.userDataService.getGroups(this.userId).subscribe(data => {
      this.groups = data;
    })
  }

  // Clears local storage on logout.
  logOut() {
    localStorage.clear();
  }



}
