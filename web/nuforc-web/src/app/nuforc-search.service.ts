import { Injectable } from '@angular/core';
import {SearchResult} from "./search-result";
import {HttpClient, HttpParams} from "@angular/common/http"
import {Observable} from "rxjs/Observable";
import {HitResult} from "./hit-result";
import {ComplexSearch} from "./complex-search";
import {ComplexSearchResult} from "./complex-search-result";
import {RequestOptions, ResponseContentType} from "@angular/http";

@Injectable()
export class NuforcSearchService {

  constructor(private http: HttpClient) { }

  search(queryString: string): Observable<SearchResult> {
    const searchUrl = '/api/encounters/_search';
    let query = `${searchUrl}`;

    return this.http.get<SearchResult>(query, {
      params: new HttpParams().set('q', queryString),
    });
  }

  complexSearch(searchParams: ComplexSearch): Observable<ComplexSearchResult> {
    const searchUrl = '/api/encounters/_search';

    console.log(searchParams.query.match.description);
    return this.http.post<ComplexSearchResult>(searchUrl, searchParams);
  }

  getEncounter(id: string): Observable<HitResult> {
    const url = `/api/encounters/encounter/${id}`;
    let query = `${url}`;

    return this.http.get<HitResult>(query);
  }
}
