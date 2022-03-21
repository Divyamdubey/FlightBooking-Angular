import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  isOpen = false;
  flag = false
  user = {
    email: '',
    password: '',
  }

  nameError = "";
  passwordError = "";

  showNameError = false;
  showpasswordError = false


  setEmail(email: string) {
    this.userService.setEmail(email)
  }
  login() {
    this.showNameError = false
    this.showpasswordError = false
    this.nameError = ''
    this.passwordError = ''

    if (this.user.email.length === 0) {
      this.showNameError = true;
      this.nameError = "Email cannot be empty"
    }


    // validation for password

    if (this.user.password.length < 6) {


      this.showpasswordError = true;
      this.passwordError = this.user.password.length === 0 ? 'Password cannot be null' : 'Atleast 6 digit requrired'
    }

    if (this.showNameError || this.showpasswordError)
      return;
    const observable = this.userService.login(this.user);
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
  constructor(public userService: UserService) { }

  ngOnInit(): void {
  }

}
