import { Injectable } from '@angular/core';
import { Property } from '../../home/model/property';
import { PropertyData } from '../../home/model/propertydata';
import { AngularFirestore } from 'angularfire2/firestore';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MypropertService {

  constructor(private db: AngularFirestore) { }

  getProperties() {
    return this.db.collection('myproperty').snapshotChanges()
   .pipe(map(values => {
    return values.map(result => {
          const data = result.payload.doc.data() as PropertyData;
          data.id = result.payload.doc.id;
          console.log(data);
          return data;
        });
   }));
  }

  addToMyFavourite(selectedProperty: Property) {

  }

  deleteProperty(id: string) {

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
