import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from '../admin/admin.component';
import { UserComponent } from '../user/user.component';
import { UserRegistrationComponent } from '../user-registration/user-registration.component';
import { SearchFlightsComponent } from '../search-flights/search-flights.component';
import { BookFlightComponent } from '../book-flight/book-flight.component';
import { SearchBookingComponent } from '../search-booking/search-booking.component';
import { AddFlightComponent } from '../add-flight/add-flight.component';
import { ReportFlightsComponent } from '../report-flights/report-flights.component';

const routes: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: 'user', component: UserComponent },
  { path: 'userRegistration', component: UserRegistrationComponent },
  { path: 'searchFlight', component: SearchFlightsComponent },
  { path: 'book', component: BookFlightComponent },
  { path: 'details', component: SearchBookingComponent },
  { path: 'addFlight', component: AddFlightComponent },
  { path: 'report', component: ReportFlightsComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
