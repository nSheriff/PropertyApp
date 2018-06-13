import { Injectable } from '@angular/core';
import { Subject, throwError, Observable } from 'rxjs';
import { Property } from '../model/property';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
      'Content-Type': 'application/json'
  })
};

const url = 'http://propertappapi.azurewebsites.net/api/properties'; // 'http://localhost:62626/api/properties';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  properties: Property[] = [];
  constructor(private http: HttpClient) { }

  getProperties() {
    return this.http.get<Property[]>(url).pipe(catchError(this.handleError));
  }

  getPropertyById(propertyId: number) {
    return this.http.get<Property>(url + '/' + propertyId).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
          console.error('An error occurred:', error.error.message);
    } else {
          console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    return throwError('Something bad happened; please try again later.');
  }
}
