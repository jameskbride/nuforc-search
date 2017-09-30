import { Injectable } from '@angular/core';
import {SearchResult} from "./search-result";
import {HttpClient, HttpParams} from "@angular/common/http"
import {Observable} from "rxjs/Observable";
import {HitResult} from "./hit-result";

@Injectable()
export class NuforcSearchService {
  hits: HitResult[];


  constructor(private http: HttpClient) { }

  search(queryString: string): Observable<SearchResult> {
    const searchUrl = '/api/encounters/_search';
    let query = `${searchUrl}`;

    return this.http.get<SearchResult>(query, {
      params: new HttpParams().set('q', queryString),
    });
  }

  getEncounter(id: string): Observable<HitResult> {
    const url = `/api/encounters/${id}`;
    let query = `${url}`;

    return this.http.get<HitResult>(query);
  }

  setEncounters(hits: HitResult[]) {
    this.hits = hits;
  }

  getEncounters(): HitResult[] {
    return this.hits;
  }
}
