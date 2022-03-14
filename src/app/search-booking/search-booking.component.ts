import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-search-booking',
  templateUrl: './search-booking.component.html',
  styleUrls: ['./search-booking.component.css']
})
export class SearchBookingComponent implements OnInit {
  isOpen = false;
  details = <any>[]
  detail = <any>Object
  flag1 = false
  flag2 = false
  searchBooking!: string;
  deleteBooking(pnr: string, index: number) {
    const observable = this.userService.deleteBookings(pnr);
    observable.subscribe((response: any) => {//success handler
      console.log(response);
      this.details.splice(index, 1);
      this.flag1 = false
      this.detail = null
      this.isOpen = true;
    });
  }
  searchBookings() {
    if (this.searchBooking.includes('@')) {
      this.flag1 = false
      this.flag2 = true
      const observable = this.userService.searchBookings(this.searchBooking);
      observable.subscribe((response: any) => {//success handler
        this.details = response;
        console.log(response);

      },
        function (error: any) { //error handler
          alert('something went wrong. Please try again.')//console log
        });
    }
    else {
      this.flag1 = true
      this.flag2 = false
      const observable = this.userService.searchBookings(this.searchBooking);
      observable.subscribe((response: any) => {//success handler
        this.detail = response;
        console.log(response);

      },
        function (error: any) { //error handler
          alert('something went wrong. Please try again.')//console log
        });
    }

  }
  constructor(public userService: UserService) { }

  ngOnInit(): void {
  }

}
