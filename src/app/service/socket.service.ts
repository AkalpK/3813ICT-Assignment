import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io } from 'socket.io-client';
const SERVER_URL= "http://localhost:3000";

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  private socket: any;

  constructor() { }

  // Setup connection to server.
  public initSocket() {
    this.socket = io(SERVER_URL);
    return () => {
      this.socket.disconnect();
    }
  }

  // Emit a message to the socket server.
  public send(message: string) {
    this.socket.emit('message', message);
  }

  // Listen for 'message' events from the socket server.
  public onMessage(): Observable<any> {
    let observable = new Observable(observer => {
      this.socket.on('mesage', (data:string) => observer.next(data));
    });
    return observable;
  }
}
