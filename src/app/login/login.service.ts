import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Login } from './login';
import {environment} from '../../environments/environment';

import 'rxjs/Rx';

@Injectable()
export class LoginService{
	constructor(private http: Http){

	}

	LogIn(user : Login){
		//let body = JSON.stringify(user);
		let body = 'userName=' + user.email + '&password=' + user.password + '&grant_type=password';
		console.log(body);
		var headers = new Headers();
    	headers.append('Content-Type', 'application/x-www-form-urlencoded');

		return this.http.post(environment.API_URL + 'token', body, {
			headers : headers
					}).map((response: Response) => { 
						let result = response.json();
						console.log(result);
					}).toPromise();
	}

	
}