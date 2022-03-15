import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  isOpen = false;
  flag = false
  admin = {
    name: 'divyam',
    password: 'divy123',
  }
  login() {
    const observable = this.adminService.login(this.admin);
    observable.subscribe((response: any) => {//success handler
      if (response == null) {
        this.flag = false
        console.warn("invalid credentials")
      }
      else {
        this.flag = true;
        console.log(response);
      }

    },
      function (error: any) { //error handler
        alert('something went wrong. Please try again.')
      });
  }
  constructor(public adminService: AdminService) { }

  ngOnInit(): void {
  }

}
