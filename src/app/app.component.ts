import { Component } from '@angular/core';
import AmmoInfo from "./models/AmmoInfo.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ammoCalc';
  result?: number = undefined;

  model: AmmoInfo = {
    // TODO: #2 make blank instance for template model
    // use crtl + space to auto-complete
    // the fields you need to make on the object based on your model
    roundsPerBox: 0, // instantiate everything with the blank value to be shown in the input fields
  }

  submit() {
    // TODO: #3 write the logic to calculate the CPR based off of an "AmmoInfo" object.
    // access properties using this.model.[whateverYouNeed]
    this.result = 0;
  }
}
