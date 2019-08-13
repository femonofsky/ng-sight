import { Server } from './../shared/server';
import { ServerMessage } from './../shared/server-message';
import { Injectable } from '@angular/core';
// import { HttpClient} from '@angular/common/http';
import { Http, RequestOptions, Headers, Response} from '@angular/http';

import { map, catchError, mapTo } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  baseUrl: string = "http://localhost:5000/api/server/";
  headers:Headers;
  options:RequestOptions;

  constructor(private _http: Http) {
    this.headers = new Headers({
      'Content-Type': 'application/json',
      'Accept': 'q=0.8;application/json;q=0.9'
    });
    this.options = new RequestOptions( {
      headers: this.headers
    });
  }


  getServers() : Observable<Server[]> {

    return this._http.get(this.baseUrl).
      pipe(map((result: any) => {
        return result.json();
      })).pipe(catchError(err => this.handError(err)));

  }

  handError( error: any) {
    const errMsgs = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server Error';
    return throwError(errMsgs);

  }

  handleSendMessage(msg: ServerMessage): Observable<Response> {
    return this._http.put(this.baseUrl + msg.id, msg, this.options).pipe(map(result => { return result}));
  }
}
