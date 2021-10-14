import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { io } from 'socket.io-client';
import { CommonModule } from '@angular/common';
import { UserDataService } from '../service/user-data.service';
import { User } from '../model/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // Object for storing user information.
  currentUser: User = {
    _id: "",
    userName: "",
    password: "",
    email: "",
    role: ""
  };

  errorMessage = ""; // Message to inform user their credentials are incorrect.

  constructor(private userDataService: UserDataService, private router: Router) {}

  ngOnInit(): void {
    if (localStorage.getItem('userID')) {
      this.router.navigateByUrl('dashboard');
    }
  }
  // Use getAllUsers() method from userDataService to return a list of all users from database and check if the user entered form data is valid. 
  validateUser(): void {
    this.userDataService.getAllUsers().subscribe(data => {
      data.forEach((data: User) => {
        if (data.userName == this.currentUser.userName && data.password == this.currentUser.password) {
          localStorage.setItem("userID", JSON.stringify(data._id));
          this.router.navigateByUrl('dashboard');
        } else {
          this.errorMessage = "Incorrect username or password.";
        }
      })
    })

  }

}
