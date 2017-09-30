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
  title = 'app sort of works!';

  constructor(private router: Router) {}

  search(queryString : string): void {
    this.router.navigate(['./search'], {queryParams: {query: queryString}});
  }
}
