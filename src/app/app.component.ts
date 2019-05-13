import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eHealth';
  navOptions: Array<string> = ['inicio', 'consulta', 'pacientes', 'citas programadas'];
}
