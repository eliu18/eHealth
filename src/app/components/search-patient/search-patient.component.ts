import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Patient } from 'src/app/models/patient';
import { PatientsService } from 'src/app/services/patients.service';

@Component({
  selector: 'app-search-patient',
  templateUrl: './search-patient.component.html',
  styleUrls: ['./search-patient.component.css']
})
export class SearchPatientComponent implements OnInit {

  patients: Array<Patient>; // Array that store all the patients from DB.
  patientsFilteredList: Array<Patient>; // Array that store just the patients filtered by input.
  patient: Patient; // Obj that store the input field value.
  showPatients: boolean;
  MAX_PATIENTS_SHOWED: number = 5; // Const that limit patients showed when searching by input.

  constructor(private pS: PatientsService) {
    this.patient = new Patient();
    this.pS.getAllPatients().subscribe((data: any) => { // Getting all patients from DB.
      this.setAllPatients(data.patients);               // Storing all patients to patients.
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

  searchPatient(event: KeyboardEvent): void {
    if (this.patient.name.length >= 3) { // Search after three letters.
      this.showPatientsFilteredByName(this.patient);
      this.showPatients = true;
    } else {
      this.showPatients = false;
    }
  }

  showPatientsFilteredByName({ name }: Patient): void {
    this.patientsFilteredList = this.patients.filter((patient: Patient, i) => {

      if (patient.name.indexOf(name.toUpperCase()) >= 0) {
        return patient;
      }
    });
    this.patientsFilteredList.slice(0, this.MAX_PATIENTS_SHOWED); // Get filtered patients with a limit.
  }

  onSubmit(patientName): void {
    if (patientName) {
    }
  }
}
