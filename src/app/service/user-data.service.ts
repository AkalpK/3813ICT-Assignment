import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private http: HttpClient) { }

  // Find all users
  getAllUsers() {
    return this.http.get<any>('http://localhost:3010/users/index');
  }

  getGroups(userId: any) {
    return this.http.post<any>('http://localhost:3010/groups/index', {'userId':userId});
  }

  getRooms(userId: any, groupId: any) {
    return this.http.post<any>('http://localhost:3010/groups/index', { 'userId': userId, 'groupId': groupId });
  }
}
