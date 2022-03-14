import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportFlightsComponent } from './report-flights.component';

describe('ReportFlightsComponent', () => {
  let component: ReportFlightsComponent;
  let fixture: ComponentFixture<ReportFlightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportFlightsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportFlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
