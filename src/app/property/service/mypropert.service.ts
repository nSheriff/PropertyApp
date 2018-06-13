import { Injectable } from '@angular/core';
import { Property } from '../../home/model/property';
import { PropertyData } from '../../home/model/propertydata';

@Injectable({
  providedIn: 'root'
})
export class MypropertService {

  myproperties: Property[] = [];
  constructor() { }

  getProperties() {
       return this.myproperties;
  }

  addToMyProperties(selectedProperty: PropertyData) {

  }

  deleteProperty(propertyId: string) {

  }
}
