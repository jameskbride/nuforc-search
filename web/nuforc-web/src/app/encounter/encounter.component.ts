import { Component } from '@angular/core';
import {NuforcSearchService} from "../nuforc-search.service";
import {ActivatedRoute} from "@angular/router";
import {HitResult} from "../hit-result";

@Component({
  selector: 'app-encounter',
  templateUrl: './encounter.component.html',
  styleUrls: ['./encounter.component.css']
})
export class EncounterComponent {

  encounter: HitResult;

  constructor(private route: ActivatedRoute, private nuforceSearchService: NuforcSearchService) {
    this.route.params.subscribe(params => {
      this.nuforceSearchService.getEncounter(params.id).subscribe(result => {
        this.encounter = result
      });
    });
  }
}
