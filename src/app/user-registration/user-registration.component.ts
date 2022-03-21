import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  isOpen = false;
  user = {
    firstName: '',
    lastName: '',
    password: '',
    phone: 0,
    email: '',
  }

  firstNameError = false
  lastNameError = false
  passwoordError = false
  phoneError = false
  emailError = false
  firstNameErrors = ""
  lastNameErrors = ""
  passwoordErrors = ""
  phoneErrors = ""
  emailErrors = ""

  save() {

    this.firstNameError = false
    this.lastNameError = false
    this.passwoordError = false
    this.phoneError = false
    this.emailError = false

    if (this.user.email.length === 0) {
      this.emailError = true;
      this.emailErrors = "Email cannot be empty"
    }
    if (this.user.firstName.length === 0) {
      this.firstNameError = true;
      this.firstNameErrors = "First name cannot be empty"
    }
    if (this.user.lastName.length === 0) {
      this.lastNameError = true;
      this.lastNameErrors = "last name cannot be empty"
    }
    if (this.user.phone < 10) {
      this.phoneError = true;
      this.phoneErrors = this.user.phone === 0 ? 'Phone cannot be null' : 'Atleast 10 digit requrired'
    }
    if (this.user.password.length < 6) {
      this.passwoordError = true;
      this.passwoordErrors = this.user.password.length === 0 ? 'Password cannot be null' : 'Atleast 6 digit requrired'
    }

    if (this.firstNameError || this.passwoordError || this.lastNameError || this.emailError || this.phoneError)
      return;
    const observable = this.userService.createUser(this.user);
    observable.subscribe((response: any) => {//success handler
      console.log(response);
      "alert('Registration successful')"
    },
      function (error: any) { //error handler
        alert('something went wrong. Please try again.')
      });
  }

  constructor(public userService: UserService) { }

  ngOnInit(): void {
  }

}
