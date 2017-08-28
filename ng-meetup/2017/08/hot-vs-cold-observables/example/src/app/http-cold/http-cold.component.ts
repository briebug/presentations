import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-http-cold',
  templateUrl: './http-cold.component.html',
  styleUrls: ['./http-cold.component.css']
})
export class HttpColdComponent implements OnInit {

  heroes: Observable<any>;

  constructor(private http: Http) { }

  ngOnInit() {
    this.heroes = this.http.get('/assets/heroes.json')
      .map((response: Response) => response.json())
      .map((json: any) => json.heroes);
  }

}
