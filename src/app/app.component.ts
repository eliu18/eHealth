import { Component } from '@angular/core';
import { NavBar } from './enums/nav-bar.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eHealth';
  navOptions: Array<object> = [];
  constructor() {
    for (const key in NavBar) {
      if (NavBar.hasOwnProperty(key)) {
        const name = NavBar[key];
        const route = key;
        this.navOptions.push({ name, route });
      }
    }
  }
}
