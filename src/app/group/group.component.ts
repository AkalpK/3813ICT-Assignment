import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  groupId = "";

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.groupId = params['groupid'];
    })
  }

}
