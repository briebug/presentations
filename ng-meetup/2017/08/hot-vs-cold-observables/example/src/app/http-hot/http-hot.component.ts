import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-http-hot',
  templateUrl: './http-hot.component.html',
  styleUrls: ['./http-hot.component.css']
})
export class HttpHotComponent implements OnInit {

  heroes: Observable<any>;

  constructor(private http: Http) { }

  ngOnInit() {
    this.heroes = this.http.get('/assets/heroes.json')
      .share()
      .map((response: Response) => response.json())
      .map((json: any) => json.heroes);
  }

}
