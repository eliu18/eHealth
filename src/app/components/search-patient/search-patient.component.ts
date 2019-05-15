import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Patient } from 'src/app/models/patient';
import { PatientsService } from 'src/app/services/patients.service';

@Component({
  selector: 'app-search-patient',
  templateUrl: './search-patient.component.html',
  styleUrls: ['./search-patient.component.css']
})
export class SearchPatientComponent implements OnInit {

  @ViewChild('searchPatientName', { read: ElementRef }) inputSearchPatientName: ElementRef;
  patients: Array<Patient>; // Array that store all the patients
  patientsFilteredList: Array<Patient>; // Array that store just the patients filtered by input
  patient: Patient;
  doesPatientExist: boolean = false;
  constructor(private pS: PatientsService) {
    this.patient = new Patient();
    this.pS.getAllPatients().subscribe((data: any) => {
      this.setAllPatients(data.patients);
    });
  }

  ngOnInit() {
  }

  setAllPatients(patients: Array<Patient>): void {
    this.patients = patients;
  }

  getAllPatients(): Array<Patient> {
    return this.patients;
  }

  onKeydownEvent(event: KeyboardEvent): void {
    const patientName = this.inputSearchPatientName.nativeElement.value;
    this.searchPatient(patientName);
    if (event.keyCode === 13) {
      console.log('Name selected');
    }
  }

  searchPatient(patientName) {
    console.log(patientName);

    this.patients = this.patients.filter((patient: Patient, i) => {
      if (patient.name.indexOf(patientName) >= 0) {
        return patient;
      }
    });
  }

  onSubmit(patientName): void {
    console.log(patientName);
    if (patientName) {
      this.doesPatientExist = true;
    }
  }
}
