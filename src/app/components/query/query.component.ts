import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

<<<<<<< HEAD
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

=======
>>>>>>> c05dc1cb61e5f3236b1f808c16b6d9e22b31d0df
}
