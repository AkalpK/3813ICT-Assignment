import { Component, OnInit } from '@angular/core';
import { groups } from '../global-variables';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  groupsList = groups;

  constructor() { }

  ngOnInit(): void {
  }
  logOut() {
    localStorage.clear();
  }

}
