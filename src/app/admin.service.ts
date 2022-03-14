import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  login(admin: { name: string; password: string; }) {
    return this.http.post("http://localhost:8080/flight/admin/login", admin, {
      headers: {
        "content-type": 'application/json'
      }
    });
  }
  addFlight(flight: {
    flightNo: string; name: string; departureFrom: string; arrivalTo: string; departureDate: string;
    arrivalDate: string; status: string; cost: number; totalSeats: number; discountCode: string;
  }) {
    return this.http.post("http://localhost:8080/flight/airline/inventory/add", flight, {
      headers: {
        "content-type": 'application/json'
      }
    });
  }

  searchFlight() {
    return this.http.get("http://localhost:8080/flight/admin/search", {
      headers: {
        "content-type": 'application/json'
      }
    });
  }

  changeStatus(flightNo: string, status: string) {
    return this.http.put("http://localhost:8080/flight/admin/status?flightNo=" + flightNo + "&status=" + status, {
      headers: {
        "content-type": 'application/json'
      }
    });
  }
  constructor(public http: HttpClient) { }
}
