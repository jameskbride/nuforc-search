import { Component } from '@angular/core';
import {NuforcSearchService } from './nuforc-search.service';
import 'rxjs/add/operator/toPromise';
import {HitResult} from "./hit-result";
import {SearchResult} from "./search-result";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  encounters: HitResult[];

  constructor(private nuforcSearchService: NuforcSearchService) {}
  title = 'app sort of works!';


  search(queryString : String): void {
    this.nuforcSearchService.search(queryString).subscribe((res) => {
      this.encounters = res.hits.hits;
    });
  }
}
