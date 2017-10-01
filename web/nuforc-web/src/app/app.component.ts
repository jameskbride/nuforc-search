import { Component } from '@angular/core';
import {NuforcSearchService } from './nuforc-search.service';
import 'rxjs/add/operator/toPromise';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  query?: string;
  title = 'Search for UFO Encounters';

  constructor(private router: Router) {}

  search(queryString : string): void {
    this.query = queryString;
    this.router.navigate(['./search'], {queryParams: {query: queryString}});
  }
}
