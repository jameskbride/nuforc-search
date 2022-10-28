import { Injectable } from '@angular/core';
import {SearchResult} from "./search-result";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http"
import {Observable} from "rxjs/Observable";
import {HitResult} from "./hit-result";
import {ComplexSearch} from "./complex-search";
import {ComplexSearchResult} from "./complex-search-result";
import {RequestOptions, ResponseContentType} from "@angular/http";
import {environment} from "../environments/environment";
import {Encounter} from "./add-encounter/encounter";
import {ReportEncounterResponse} from "./ReportEncounterResponse";

@Injectable()
export class NuforcSearchService {

  constructor(private http: HttpClient) { }

  search(queryString: string): Observable<SearchResult> {
    const searchUrl = environment.BASE_URL + '/encounters/_search';
    let query = `${searchUrl}`;

    return this.http.get<SearchResult>(query, {
      params: new HttpParams().set('q', queryString),
    });
  }

  complexSearch(searchParams: ComplexSearch): Observable<ComplexSearchResult> {
    const searchUrl = environment.BASE_URL + '/encounters/_search';

    console.log(searchParams.query.match.description);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<ComplexSearchResult>(searchUrl, searchParams, {headers: headers});
  }

  getEncounter(id: string): Observable<HitResult> {
    const url = environment.BASE_URL + `/encounters/encounter/${id}`;
    let query = `${url}`;

    return this.http.get<HitResult>(query);
  }


}
