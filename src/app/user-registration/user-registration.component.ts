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
    firstName: 'divyam',
    lastName: 'dubey',
    password: 'divy123',
    phone: 988594,
    email: 'divya@gmail',
  }
  save() {
    const observable = this.userService.createUser(this.user);

    observable.subscribe((response: any) => {//success handler
      console.log(response);
    },
      function (error: any) { //error handler
        alert('something went wrong. Please try again.')
      });
  }

  constructor(public userService: UserService) { }

  ngOnInit(): void {
  }

}
