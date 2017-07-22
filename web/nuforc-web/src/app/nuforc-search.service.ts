import { Injectable } from '@angular/core';
import {SearchResult} from "./search-result";
import {HttpClient} from "@angular/common/http"
import {Observable} from "rxjs/Observable";
@Injectable()
export class NuforcSearchService {


  constructor(private http: HttpClient) { }

  search(queryString: String): Observable<SearchResult>{
    const searchUrl = '/api/encounters/_search?q=';
    let query = `${searchUrl}${queryString}`;
    return this.http.get<SearchResult>(query);
  }
}
