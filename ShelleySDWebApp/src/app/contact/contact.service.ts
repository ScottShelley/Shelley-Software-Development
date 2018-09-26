import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from "@angular/http";
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/throw';
import { IContact } from "./Contact.model";

@Injectable()
export class ContactService {
	url: string = "/api/Email";

	constructor(private http: Http) { }

	PostEmail(model: IContact) {
		let headers = new Headers();
		headers.append('Content-Type', 'application/json; charset=utf-8');
		headers.append('Accept', 'application/json');

		let options = new RequestOptions({ headers: headers });

		return this.http.post(this.url, model, options)
			.map((res: Response) => res.json())
			.do(data => console.log(data))
			.catch((error: any) => Observable.throw(error.json().error || 'Server Error'));
	}

	private handleError(error: Response) { 
		console.error(error); 
		return Observable.throw(error.json()); 
	}
}
