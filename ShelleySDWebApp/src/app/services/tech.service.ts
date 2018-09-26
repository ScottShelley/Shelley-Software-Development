import { Http, RequestOptions, Response, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ITech } from '../technology/tech.interface';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class TechService {
  protected url: string = "/api/Tech";
  isTechnology: boolean = false;

  constructor(private http: Http) { }


  GetTech() {
    let headers = new Headers();
		headers.append('Content-Type', 'application/json');

    let options = new RequestOptions({ headers: headers });
    
    return this.http.get(this.url, options)
      .map((response: Response) => <ITech[]> response.json())
      //.do(data => console.log(JSON.stringify(data)))
      .catch(this.handleError);
  }

  private handleError(error: Response) { 
    console.error(error); 
    return Observable.throw(error.json().error()); 
 }
}
