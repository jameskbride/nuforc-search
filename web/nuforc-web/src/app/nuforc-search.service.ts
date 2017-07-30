import { Injectable } from '@angular/core';
import {SearchResult} from "./search-result";
import {HttpClient, HttpParams} from "@angular/common/http"
import {Observable} from "rxjs/Observable";
@Injectable()
export class NuforcSearchService {


  constructor(private http: HttpClient) { }

  search(queryString: string): Observable<SearchResult>{
    const searchUrl = '/api/encounters/_search';
    let query = `${searchUrl}`;

    return this.http.get<SearchResult>(query, {
      params: new HttpParams().set('q', queryString),
    });
  }
}
