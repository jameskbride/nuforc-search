import { Component } from '@angular/core';
import {Encounter} from "./encounter";

@Component({
  selector: 'add-encounter',
  templateUrl: './add-encounter.component.html',
  styleUrls: ['./add-encounter.component.css']
})
export class AddEncounterComponent {

  model: Encounter;

  constructor() {
    this.model = new Encounter();
  }

  submit() {

  }
}
