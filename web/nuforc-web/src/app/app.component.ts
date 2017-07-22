import { Component } from '@angular/core';
import {NuforcSearchService } from './nuforc-search.service';
import 'rxjs/add/operator/toPromise';
import {NuforcEncounter} from "./nuforc-encounter";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  encounters: NuforcEncounter[];

  constructor(private nuforcSearchService: NuforcSearchService) {}
  title = 'app sort of works!';

  search(queryString : String): void {
    this.encounters = this.nuforcSearchService.search(queryString);
  }
}
