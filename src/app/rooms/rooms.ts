import { Component } from '@angular/core';
import { Room, RoomList } from './roomsInterface';

@Component({
  selector: 'hinv-rooms',
  imports: [],
  templateUrl: './rooms.html',
  styleUrl: './rooms.scss'
})

export class Rooms {

  hotelName = 'Hilton Hotel';

  numberofRooms = 10;

  hideRooms = false;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  }

  roomList: RoomList[] = [{
    roomNumber: 1,
    roomType: "Deluxe Room",
    amenities: "Air Conditioner, Free wi-fi, TV",
    price: 500,
    photos: "https://picsum.photos/200/300",
    checkInTime: new Date("11-Nov-2025"),
    checkOutTime: new Date("12-Nov-2025")

  },
  {
    roomNumber : 2,
    roomType: "Deluxe Room 2",
    amenities: "Air Conditioner, Free wi-fi, TV, pool",
    price: 700,
    photos: "https://picsum.photos/200/300",
    checkInTime: new Date("12-Nov-2025"),
    checkOutTime: new Date("13-Nov-2025")
  },
  {
    roomNumber : 3,
    roomType: "Deluxe Room 3",
    amenities: "Air Conditioner, Free wi-fi, TV, pool",
    price: 700,
    photos: "https://picsum.photos/200/300",
    checkInTime: new Date("14-Nov-2025"),
    checkOutTime: new Date("15-Nov-2025")
  }
  ]

  toggle() {
    this.hideRooms = !this.hideRooms;
  }

}
