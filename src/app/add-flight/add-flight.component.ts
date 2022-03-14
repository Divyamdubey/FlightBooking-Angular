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
    flightNo:'In66',
    name:'Indigo',
    departureFrom:'Lucknow',
    arrivalTo:'Bangalore',
    departureDate:'13-10-2022',
    arrivalDate:'13-10-2022',
    status:'unblocked',
    cost:2000,
    totalSeats:200,
    discountCode:'happy60'
  }
  addFlight() {
    const observable = this.adminService.addFlight(this.flight);
    observable.subscribe((response: any) => {//success handler
      if (response.something) {
        console.warn("addedsuccessfully")      }
      console.log(response);   
    },
      function (error: any) { //error handler
        alert('something went wrong. Please try again.')
      });
  }
  constructor(public adminService:AdminService) { }

  ngOnInit(): void {
  }

}
