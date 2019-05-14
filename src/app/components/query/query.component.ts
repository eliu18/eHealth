import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/models/patient';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent implements OnInit {

  patient: Patient;
  doesPatientExist: boolean = false;
  constructor() {
    this.patient = new Patient();
  }

  ngOnInit() {
  }

  onSubmit(patientName): void {
    if (patientName) {
      this.doesPatientExist = true;
    }
  }

  onKeydownEvent(event: KeyboardEvent, patientName: string): void {
    if (event.keyCode === 13) {
      console.log(patientName);
    }
  }

  searchPatient() {

  }

}
