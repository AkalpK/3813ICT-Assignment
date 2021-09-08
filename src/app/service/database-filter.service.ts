import { Injectable } from '@angular/core';
import { SocketService } from './socket.service';

@Injectable({
  providedIn: 'root'
})
export class DatabaseFilterService {

  currentDatabase: any;
  currentUser = localStorage.getItem("userName");
  database: any;
  ioConnection: any;

  constructor(private socketService: SocketService) { }

  public setDatabase(database: any) {
    this.socketService.initSocket();
    this.ioConnection = this.socketService.pullDatabase().subscribe(
      (data:any) => {
        this.database = data;
        
      }
    );
    this.currentDatabase = database;

  }


  public getGroups() {
    const accessibleGroups = [];
    for (let i = 0; i < this.currentDatabase.groups.length; i++ ) {
      if (this.currentDatabase.groups[i].members.includes(this.currentUser)) {
        accessibleGroups.push(this.currentDatabase.groups[i].groupName);
        sessionStorage.setItem("Group"+ i,this.currentDatabase.groups[i].groupName);
      }
    }
    return accessibleGroups;
  }

  public getRooms() {
    const accessibleRooms = [];
    for (let i = 0; i < this.currentDatabase.rooms.length; i++) {
      if (this.currentDatabase.rooms[i].accessibleTo.includes(this.currentUser)) {
        accessibleRooms.push(this.currentDatabase.rooms[i]);
        sessionStorage.setItem("Room"+ i,this.currentDatabase.rooms[i].roomName);
      }
    }
    return accessibleRooms;
  }
}
