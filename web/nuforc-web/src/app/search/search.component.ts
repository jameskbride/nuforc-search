import {Component} from '@angular/core';
import 'rxjs/add/operator/toPromise';
import {HitResult} from "../hit-result";
import {ActivatedRoute} from "@angular/router";
import {NuforcSearchService} from "../nuforc-search.service";
import {Observable} from "rxjs/Observable";
import {ComplexSearch} from "../complex-search";
import {ComplexQuery} from "../complex-query";
import {MatchOnDescription} from "../match-on-description";
import {ComplexAggregations} from "../complex-aggregations";
import {AggregateOnShapes} from "../aggregrate-on-shapes";
import {AggregateTerms} from "../aggregate-terms";
import {ComplexSearchResult} from "../complex-search-result";
import {Bucket} from "../bucket";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  buckets: Bucket[];
  searchResults: Observable<ComplexSearchResult>;
  encounters: HitResult[];
  constructor(private route: ActivatedRoute, private nuforcSearchService: NuforcSearchService) {
    route.queryParams.subscribe(params => {
      let matchOnDescription = new MatchOnDescription(params.query);
      let complexQuery = new ComplexQuery(matchOnDescription);
      let aggregateOnTerms = new AggregateTerms("shape");
      let aggregationsOnShape = new AggregateOnShapes(aggregateOnTerms);
      let complexAggregations = new ComplexAggregations(aggregationsOnShape);
      let complexSearch = new ComplexSearch(complexQuery, complexAggregations);
      this.searchResults = this.nuforcSearchService.complexSearch(complexSearch);
      this.searchResults.subscribe(results => {
        this.encounters = results.hits.hits;
        this.buckets = results.aggregations.shapes.buckets;
      })
    });
  }
}
