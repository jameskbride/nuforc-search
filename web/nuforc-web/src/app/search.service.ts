import { Injectable } from '@angular/core';
import {Http, RequestOptions, URLSearchParams} from '@angular/http';
import { NuforcEncounter } from './nuforcEncounter';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SearchService {

  private searchUrl = 'http://localhost:8080/encounters/encounter/_search';  // URL to web api


  constructor(private http: Http) { }

  search(queryString): Promise<NuforcEncounter[]> {
    let requestOptions: RequestOptions = new RequestOptions();
    let urlSearchParams: URLSearchParams = new URLSearchParams();
    urlSearchParams.set('q', queryString);
    requestOptions.params = urlSearchParams;
    return this.http.get(this.searchUrl, requestOptions)
      .toPromise()
      .then(response => response.json().data.hits.hits.map(hit => hit.source) as NuforcEncounter[]);
  }

}
