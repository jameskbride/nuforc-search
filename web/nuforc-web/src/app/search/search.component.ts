import {Component} from '@angular/core';
import 'rxjs/add/operator/toPromise';
import {HitResult} from "../hit-result";
import {ActivatedRoute} from "@angular/router";
import {NuforcSearchService} from "../nuforc-search.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  encounters: HitResult[];
  title = 'app sort of works!';
  constructor(private route: ActivatedRoute, private nuforcSearchService: NuforcSearchService) {
    route.queryParams.subscribe(params => {
      this.nuforcSearchService.search(params.query).subscribe(results => {
        this.encounters = results.hits.hits;
      })
    });
  }
}
