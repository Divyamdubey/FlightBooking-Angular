import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-report-flights',
  templateUrl: './report-flights.component.html',
  styleUrls: ['./report-flights.component.css']
})
export class ReportFlightsComponent implements OnInit {

  
  constructor(public adminService:AdminService) { }

  ngOnInit(): void {
  }

}