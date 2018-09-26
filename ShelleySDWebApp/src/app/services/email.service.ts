import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/throw';

@Injectable()
export class EmailService {

  constructor(private http: Http) { }

  postSEO(data) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    let options = new RequestOptions({ headers: headers });

    return this.http.post('/api/free-seo-assessmnet', JSON.stringify(data), options)
      .map((res: Response) => res.json())
			.do(data => console.log(data))
			.catch((error: any) => Observable.throw(error.json().error || 'Server Error'));
  }

  postSocialAudit(data) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    let options = new RequestOptions({ headers: headers });

    return this.http.post('/api/social-media-audit', JSON.stringify(data), options)
      .map((res: Response) => res.json())
			.do(data => console.log(data))
			.catch((error: any) => Observable.throw(error.json().error || 'Server Error'));
  }

}
