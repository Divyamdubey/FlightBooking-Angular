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
  fromError = false
  toError = false
  fromErrors = ""
  toErrors = ""


  setFlightNo(flightNo: string) {
    this.userService.setFlightNo(flightNo)
  }
  setCost(cost: number) {
    this.userService.setCost(cost)
  }
  setFrom(from: string) {
    this.userService.setFrom(from)
  }
  setTo(to: string) {
    this.userService.setTo(to)
  }
  search() {
    this.fromError = false
    this.toError = false

    if (this.searchFlight.departureFrom.length === 0) {
      this.fromError = true
      this.fromErrors = "Departure cannot be empty"
    }
    if (this.searchFlight.arrivalTo.length === 0) {
      this.toError = true
      this.toErrors = "Arrival cannot be empty"
    }

    if (this.fromError || this.toError) {
      return
    }
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
