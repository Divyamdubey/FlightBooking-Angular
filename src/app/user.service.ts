import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  flightNo = ""
  cost = 0

  email = ""
  from = ""
  to = ""
  login(user: { email: string; password: string; }) {
    return this.http.post("http://localhost:8080/flight/user/login", user, {
      headers: {
        "content-type": 'application/json'
      }
    });
  }

  createUser(user: { firstName: string; lastName: string; password: string; phone: number; email: string; }) {
    return this.http.post("http://localhost:8080/flight/airline/UserRegister", user, {
      headers: {
        "content-type": 'application/json'
      }
    });
  }

  searchFlight(departureFrom: string, arrivalTo: string) {
    return this.http.post("http://localhost:8080/flight/search?" + "flightDeparture=" + departureFrom + "&flightArrival=" + arrivalTo, {

      headers: {
        "content-type": 'application/json'
      }
    });
  }

  bookReturnFlight(returnbooking: {
    firstName: string; lastName: string; flightNo: string; pnr: string; age: number; mail: string; gender: string; mealType: string;
    seatNo: number; cost: number; bookingMail: string;
  },
    flightNo: string) {

    return this.http.post("http://localhost:8080/flight/booking/" + flightNo, returnbooking, {
      headers: {
        "content-type": 'application/json'
      }
    });
  }

  bookFlight(booking: {
    firstName: string; lastName: string; flightNo: string; pnr: string; age: number; mail: string; gender: string; mealType: string;
    seatNo: number; cost: number; bookingMail: string;
  }, flightNo: string) {
    return this.http.post("http://localhost:8080/flight/booking/" + flightNo, booking, {
      headers: {
        "content-type": 'application/json'
      }
    });
  }

  searchBookings(searchBooking: string) {
    if (searchBooking.includes('@')) {


      return this.http.get("http://localhost:8080/flight/booking/history/" + searchBooking, {
        headers: {
          "content-type": 'application/json'
        }
      });
    }
    return this.http.get("http://localhost:8080/flight/ticket/" + searchBooking, {
      headers: {
        "content-type": 'application/json'
      }
    });
  }

  deleteBookings(pnr: string) {
    return this.http.delete("http://localhost:8080/flight/booking/cancel/" + pnr, {
      headers: {
        "content-type": 'application/json'
      }
    });
  }

  viewDetails(pnr: string) {
    return this.http.get("http://localhost:8080/flight/booking/passenger/" + pnr, {
      headers: {
        "content-type": 'application/json'
      }
    });
  }

  setFlightNo(flightNo: string) {
    this.flightNo = flightNo
  }
  getFlightNo() {
    return this.flightNo
  }
  setCost(cost: number) {
    this.cost = cost
  }
  getCost() {
    return this.cost
  }
  setEmail(email: string) {
    this.email = email
  }
  getEmail() {
    return this.email
  }
  setFrom(from: string) {
    this.from = from
  }
  getFrom() {
    return this.from
  }
  setTo(to: string) {
    this.to = to
  }
  getTo() {
    return this.to
  }

  constructor(public http: HttpClient) { }
}