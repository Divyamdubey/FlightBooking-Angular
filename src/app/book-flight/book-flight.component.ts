import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-book-flight',
  templateUrl: './book-flight.component.html',
  styleUrls: ['./book-flight.component.css']
})
export class BookFlightComponent implements OnInit {

  booking = {
    "firstName": "",
    "lastName": "",
    "flightNo": this.userService.getFlightNo(),
    "pnr": "",
    "age": 0,
    "mail": "",
    "gender": "",
    "mealType": "",
    "seatNo": 0,
    "cost": this.userService.getCost(),
    "bookingMail": ""
  }
  bookFlight() {
    const observable = this.userService.bookFlight(this.booking, this.booking.flightNo);
    observable.subscribe((response: any) => {//success handler
      console.log(response);

    },
      function (error: any) { //error handler
        alert('something went wrong. Please try again.')
      });
  }
  constructor(public userService: UserService) { }

  ngOnInit(): void {
  }

}
