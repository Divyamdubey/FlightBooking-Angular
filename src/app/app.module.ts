import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './routing/app-routing.module';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { SearchFlightsComponent } from './search-flights/search-flights.component';
import { BookFlightComponent } from './book-flight/book-flight.component';
import { SearchBookingComponent } from './search-booking/search-booking.component';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { ReportFlightsComponent } from './report-flights/report-flights.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent, AdminComponent, UserComponent, UserRegistrationComponent, SearchFlightsComponent, BookFlightComponent, SearchBookingComponent, AddFlightComponent, ReportFlightsComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, HttpClientModule, AppRoutingModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
