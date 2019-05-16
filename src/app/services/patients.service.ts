import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Patient } from '../models/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  constructor(private http: HttpClient) { }

  getAllPatients() {
    return this.http.get('/api/patient');
  }

  addPatient(patient: Patient) {
    return this.http.post('/api/patient', patient);
  }
}
