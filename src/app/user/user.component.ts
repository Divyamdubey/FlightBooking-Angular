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
    email: 'archit@gmail',
    password: 'archit123',
  }
  setEmail(email: string) {
    this.userService.setEmail(email)
  }
  login() {
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
