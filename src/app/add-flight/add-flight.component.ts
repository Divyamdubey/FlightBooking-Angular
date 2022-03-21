import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.css']
})
export class AddFlightComponent implements OnInit {
  flight = {
    flightNo: '',
    name: '',
    departureFrom: '',
    arrivalTo: '',
    departureDate: '',
    arrivalDate: '',
    status: '',
    cost: 0,
    totalSeats: 0,
    discountCode: ''
  }
  flightNoError = "";
  nameError = "";
  fromError = "";
  toError = "";
  fromdateError = "";
  todateError = "";
  statusError = "";
  costError = "";
  totalseatError = "";
  discountError = "";

  flightNoErrors = false;
  nameErrors = false
  fromErrors = false;
  toErrors = false;
  fromdateErrors = false;
  todateErrors = false
  statusErrors = false;
  costErrors = false;
  totalseatErrors = false;
  discountErrors = false;




  addFlight() {
    this.flightNoErrors = false;
    this.nameErrors = false
    this.fromErrors = false;
    this.toErrors = false;
    this.fromdateErrors = false;
    this.todateErrors = false
    this.statusErrors = false;
    this.costErrors = false;
    this.totalseatErrors = false;
    this.discountErrors = false;

    if (this.flight.flightNo.length === 0) {
      this.flightNoErrors = true;
      this.flightNoError = "FlightNo cannot be empty"
    }
    if (this.flight.name.length === 0) {
      this.nameErrors = true;
      this.nameError = " Name cannot be empty"
    }
    if (this.flight.departureFrom.length === 0) {
      this.fromErrors = true;
      this.fromError = "Departure cannot be empty"
    }
    if (this.flight.arrivalTo.length === 0) {
      this.toErrors = true;
      this.toError = "Arrival cannot be empty"
    }
    if (this.flight.departureDate.length === 0) {
      this.fromdateErrors = true;
      this.fromdateError = " Date cannot be empty"
    }
    if (this.flight.arrivalDate.length === 0) {
      this.todateErrors = true;
      this.todateError = "Date cannot be empty"
    }
    if (this.flight.status.length === 0) {
      this.statusErrors = true;
      this.statusError = "Cost cannot be empty"
    }
    if (this.flight.cost === 0) {
      this.costErrors = true;
      this.costError = " Status cannot be empty"
    }
    if (this.flight.totalSeats === 0) {
      this.totalseatErrors = true;
      this.totalseatError = "Totalseats cannot be empty"
    }
    if (this.flight.discountCode.length === 0) {
      this.discountErrors = true;
      this.discountError = "Status cannot be empty"
    }

    if (this.flightNoErrors || this.nameError || this.fromError || this.toErrors || this.fromdateErrors
      || this.todateErrors || this.statusErrors || this.costErrors || this.totalseatErrors || this.discountErrors)
      return;

    const observable = this.adminService.addFlight(this.flight);
    observable.subscribe((response: any) => {//success handler
      if (response == null) {
        console.warn("please enter all the details")
      }
      console.log(response);
    },
      function (error: 400) { //error handler
        if (error == 400) {
          console.warn("flight already present with same flight no.")
        }
        else { alert('something went wrong. Please try again.') }

      }
    );
  }
  constructor(public adminService: AdminService) { }

  ngOnInit(): void {
  }

}
