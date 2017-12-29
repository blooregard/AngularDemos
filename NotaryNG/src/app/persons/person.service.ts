import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { IPerson } from './person';
import { IPagedPerson } from './pagedperson';

@Injectable()
export class PersonService {
  private _personUrl = 'http://localhost:8080/api/person/';

  constructor(private _http: HttpClient) {}

  getPersons(): Observable<IPerson[]> {
    return this._http.get<IPagedPerson>(this._personUrl)
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  getPerson(id: number): Observable<IPerson> {
        return this._http.get<IPerson>(this._personUrl+id)
          .do(data => console.log('All: ' + JSON.stringify(data)))
          .catch(this.handleError);
    }

  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }
}
