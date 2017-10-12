import { Component } from '@angular/core';
import {Encounter} from "./encounter";
import {EncounterService} from "../encounter.service";
import {ReportEncounterResponse} from "../ReportEncounterResponse";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-encounter',
  templateUrl: './add-encounter.component.html',
  styleUrls: ['./add-encounter.component.css']
})
export class AddEncounterComponent {

  model: Encounter;

  constructor(private router: Router, private encounterService:EncounterService) {
    this.model = new Encounter();
  }

  submit() {
    console.log('stuff');
    this.encounterService.reportEncounter(this.model).subscribe((reportEncounter:ReportEncounterResponse) => {
      this.router.navigate(['/']);
    });
  }
}
