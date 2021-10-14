import { Room } from '../model/room.model';

export interface Group {
  _id: string;
  groupName: string;
  members: [string];
}
