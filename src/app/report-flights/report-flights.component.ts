import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-report-flights',
  templateUrl: './report-flights.component.html',
  styleUrls: ['./report-flights.component.css']
})
export class ReportFlightsComponent implements OnInit {
  flights = <any>[]
  status = "Unblocked"
  search() {
    const observable = this.adminService.searchFlight();
    observable.subscribe((response: any) => {//success handler
      this.flights = response;
      console.log(response);

    },
      function (error: any) { //error handler
        alert('something went wrong. Please try again.')//console log
      });
  }
  changeStatus(flightNo: string, status: string) {
    const observable = this.adminService.changeStatus(flightNo, status);
    observable.subscribe((response: any) => {//success handler
      console.log(response);

    },
    );
  }
  deleteFlight(flightNo: string) {
    const observable = this.adminService.deleteFlight(flightNo);
    observable.subscribe((response: any) => {//success handler
      console.log(response);

    },
    );
  }
  constructor(public adminService: AdminService) { }

  ngOnInit(): void {
  }

}
