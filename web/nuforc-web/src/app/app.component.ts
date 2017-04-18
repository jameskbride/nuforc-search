import { Component } from '@angular/core';
import {SearchService } from './search.service';
import 'rxjs/add/operator/toPromise';
import {NuforcEncounter} from "./nuforcEncounter";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SearchService]
})
export class AppComponent {

  constructor(private searchService: SearchService) {}
  title = 'app works!';
  nuforcEncounters: NuforcEncounter[];

  search(queryString : String): void {
    this.searchService.search(queryString).then(nuforcEncounters => this.nuforcEncounters = nuforcEncounters);
  }
}
