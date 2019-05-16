import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/models/patient';
import { PatientsService } from 'src/app/services/patients.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {

  patient: Patient;

  constructor(private pS: PatientsService) {
    this.patient = new Patient();
  }

  ngOnInit() {
  }

  setPatient(patient: Patient): void {
    this.patient = patient;
  }

  getPatient(): Patient {
    return this.patient;
  }

  addPatient() {
    const patient = this.getPatient();
    this.pS.addPatient(patient).subscribe((cb: any) => {
      if (cb.status === 'ok') {
        console.log('Entro');
        this.cleanAddPatientInput();
      }
    });
  }

  cleanAddPatientInput() {
    this.patient.name = '';
  }
}
