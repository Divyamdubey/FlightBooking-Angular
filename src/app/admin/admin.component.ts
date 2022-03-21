import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { AdminService } from '../admin.service';
import { FormBuilder } from '@angular/forms';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  isOpen = false;
  flag = false

  nameError = "";
  passwordError = "";

  showNameError = true;
  showpasswordError = false


  admin = {
    name: '',
    password: '',
  }


  login() {


    this.showNameError = false
    this.showpasswordError = false
    this.nameError = ''
    this.passwordError = ''

    if (this.admin.name.length === 0) {
      this.showNameError = true;
      this.nameError = "Name cannot be empty"
    }


    // validation for password

    if (this.admin.password.length < 6) {


      this.showpasswordError = true;
      this.passwordError = this.admin.password.length === 0 ? 'Password cannot be null' : 'Atleast 6 digit requrired'
    }

    if (this.showNameError || this.showpasswordError)
      return;
    const observable = this.adminService.login(this.admin);
    observable.subscribe((response: any) => {//success handler
      if (response == null) {
        this.flag = false
        alert("invalid credentials")
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


  constructor(public adminService: AdminService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {

  }
}
