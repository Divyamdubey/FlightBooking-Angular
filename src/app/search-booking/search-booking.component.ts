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
  passenger = <any>[]
  detail = <any>Object
  flag1 = false
  flag2 = false
  flag3 = true
  searchBooking = {
    "searchBooking": ""
  }
  //searchBooking!: string;
  pnrError = false
  pnrErrors = ""
  back() {
    this.flag3 = true
  }
  viewDetails(pnr: string, index: number) {
    this.flag3 = false
    const observable = this.userService.viewDetails(pnr);
    observable.subscribe((response: any) => {//success handler
      this.passenger = response;
      console.log(response);
    });
  }
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
    this.pnrError = false
    if (this.searchBooking.searchBooking.length === 0) {
      this.pnrError = true
      this.pnrErrors = "Enter pnr or mail"
    }
    if (this.pnrError) {
      return
    }
    if (this.searchBooking.searchBooking.includes('@')) {
      this.flag1 = false
      this.flag2 = true
      const observable = this.userService.searchBookings(this.searchBooking.searchBooking);
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
      const observable = this.userService.searchBookings(this.searchBooking.searchBooking);
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
