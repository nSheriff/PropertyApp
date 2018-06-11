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
    const id1 = Math.round(Math.random() * 5000);
    const id2 = Math.round(Math.random() * 5000);
    const id3 = Math.round(Math.random() * 5000);
    const id4 = Math.round(Math.random() * 5000);
    const id5 = Math.round(Math.random() * 5000);
    const id6 = Math.round(Math.random() * 5000);
    this.myproperties = [
      { address: 'Test', city: '', description: '', pictureName: '', postcode: '', price: 150000, propertyId: id1 },
      { address: 'Test', city: '', description: '', pictureName: '', postcode: '', price: 150000, propertyId: id2 },
      { address: 'Test', city: '', description: '', pictureName: '', postcode: '', price: 150000, propertyId: id3 },
      { address: 'Test', city: '', description: '', pictureName: '', postcode: '', price: 150000, propertyId: id4 },
      { address: 'Test', city: '', description: '', pictureName: '', postcode: '', price: 150000, propertyId: id5 },
      { address: 'Test', city: '', description: '', pictureName: '', postcode: '', price: 150000, propertyId: id6 },
    ];
    return this.myproperties;
  }

  addToMyProperties(selectedProperty: PropertyData) {

  }

  deleteProperty(propertyId: string) {

  }
}
