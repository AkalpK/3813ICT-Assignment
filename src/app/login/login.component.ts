import { Component, OnInit } from '@angular/core';
import { users } from '../global-variables';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  validUsers = users; // Variable for storing global user data. 
  userName = ""; // Variable for storing user input.
  errorMessage = ""; // Message to inform user their credentials are incorrect.

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  // Function for testing username is valid and redirecting to dashboard.
  logIn() {
    for (let i = 0; i < this.validUsers.length; i++) {
      if (this.userName == this.validUsers[i].userName) {
        this.router.navigateByUrl('dashboard');
      } else {
        this.errorMessage = "Error: User does not exist."
      }
    }
  }

}
