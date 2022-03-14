import { HttpParams, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-search-flights',
  templateUrl: './search-flights.component.html',
  styleUrls: ['./search-flights.component.css']
})
export class SearchFlightsComponent implements OnInit {
  isOpen = false;
  searchFlight = {
    departureFrom: 'Lucknow',
    arrivalTo: 'Bangalore',
  }
  flights = <any>[];

  setFlightNo(flightNo: string) {
    this.userService.setFlightNo(flightNo)
  }
  setCost(cost: number) {
    this.userService.setCost(cost)
  }
  search() {
    const observable = this.userService.searchFlight(this.searchFlight.departureFrom, this.searchFlight.arrivalTo);
    observable.subscribe((response: any) => {//success handler
      this.flights = response;
      console.log(response);

    },
      function (error: any) { //error handler
        alert('something went wrong. Please try again.')//console log
      });
  }
  constructor(public userService: UserService) { }

  ngOnInit(): void {
  }

}
