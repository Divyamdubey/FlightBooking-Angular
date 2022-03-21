import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-book-flight',
  templateUrl: './book-flight.component.html',
  styleUrls: ['./book-flight.component.css']
})
export class BookFlightComponent implements OnInit {
  isReturn = "false"
  flag = false
  returnWindow = false
  searchWindow = false
  returnflights = <any>[];
  returnflightNo = ""
  returncost = 0
  searchFlight = {
    departureFrom: this.userService.getTo(),
    arrivalTo: this.userService.getFrom()
  }

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
    "bookingMail": this.userService.getEmail()
  }

  returnbooking = {
    "firstName": "",
    "lastName": "",
    "flightNo": this.getReturnFlightNo(),
    "pnr": "",
    "age": 0,
    "mail": "",
    "gender": "",
    "mealType": "",
    "seatNo": 0,
    "cost": this.returncost,
    "bookingMail": this.userService.getEmail()
  }

  firstNameError = false
  lastNameError = false
  seatError = false
  genderError = false
  mealTypeError = false
  ageError = false
  mailError = false
  returnseatError = false
  firstNameErrors = ""
  lastNameErrors = ""
  seatErrors = ""
  genderErrors = ""
  mealTypeErrors = ""
  ageErrors = ""
  mailErrors = ""
  returnseatErrors = ""


  setReturnFlightNo(flightNo: string) {
    this.returnflightNo = flightNo
  }
  getReturnFlightNo() {
    return this.returnflightNo
  }
  setReturnCost(cost: number) {
    this.returncost = cost
  }
  getReturnCost() {
    return this.returncost
  }

  returnTicketDetails() {
    this.searchWindow = false
    this.returnWindow = true
  }

  eventClick(value: string) {
    if (value == "true") {
      this.flag = true
      this.searchWindow = true
      this.returnWindow = false
    }
    if (value == "false") {
      this.flag = false
      this.searchWindow = false
    }
  }

  setFlightNo(flightNo: string) {
    this.userService.setFlightNo(flightNo)
  }
  setCost(cost: number) {
    this.userService.setCost(cost)
  }



  search() {
    const observable = this.userService.searchFlight(this.searchFlight.departureFrom, this.searchFlight.arrivalTo);
    observable.subscribe((response: any) => {//success handler
      this.returnflights = response;
      console.log(response);

    },
      function (error: any) { //error handler
        alert('something went wrong. Please try again.')//console log
      });
  }
  bookReturnFlight() {
    this.returnseatError = false
    this.returnbooking.firstName = this.booking.firstName
    this.returnbooking.lastName = this.booking.lastName
    this.returnbooking.age = this.booking.age
    this.returnbooking.mail = this.booking.mail
    this.returnbooking.gender = this.booking.gender
    this.returnbooking.flightNo = this.returnflightNo
    this.returnbooking.cost = this.returncost
    if (this.returnbooking.seatNo === 0) {
      this.returnseatError = true
      this.returnseatErrors = "Seat no cannot be empty"
    }
    if (this.returnseatError) {
      return
    }

    this.bookFlight()
    const observable = this.userService.bookReturnFlight(this.returnbooking, this.returnbooking.flightNo);
    observable.subscribe((response: any) => {//success handler
      console.log(response);
    },
      function (error: any) { //error handler
        alert('something went wrong. Please try again.')
      });
  }

  bookFlight() {

    this.firstNameError = false
    this.lastNameError = false
    this.seatError = false
    this.genderError = false
    this.mealTypeError = false
    this.ageError = false
    this.mailError = false

    if (this.booking.firstName.length === 0) {
      this.firstNameError = true
      this.firstNameErrors = "First name cannot be empty"
    }
    if (this.booking.lastName.length === 0) {
      this.lastNameError = true
      this.lastNameErrors = "Last name cannot be empty"
    }
    if (this.booking.age === 0) {
      this.ageError = true
      this.ageErrors = "Age cannot be 0"
    }
    if (this.booking.mail.length === 0) {
      this.mailError = true
      this.mailErrors = "Mail cannot be empty"
    }
    if (this.booking.seatNo === 0) {
      this.seatError = true
      this.seatErrors = "Seat no cannot be empty"
    }
    if (this.booking.gender.length === 0) {
      this.genderError = true
      this.genderErrors = "Gender cannot be empty"
    }
    if (this.booking.mealType.length === 0) {
      this.mealTypeError = true
      this.mealTypeErrors = "Meal cannot be empty"
    }

    if (this.firstNameError || this.lastNameError || this.ageError || this.mailError || this.genderError || this.seatError
      || this.mealTypeError) {
      return
    }


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
