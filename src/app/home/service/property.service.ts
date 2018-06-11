import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Property } from '../model/property';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  properties: Property[] = [];
  constructor() { }

  getProperties() {
    const id1 = Math.round(Math.random() * 5000);
    const id2 = Math.round(Math.random() * 5000);
    const id3 = Math.round(Math.random() * 5000);
    const id4 = Math.round(Math.random() * 5000);
    const id5 = Math.round(Math.random() * 5000);
    const id6 = Math.round(Math.random() * 5000);
    this.properties = [
      { address: 'Test', city: '', description: '', pictureName: '', postcode: '', price: 150000, propertyId: id1 },
      { address: 'Test', city: '', description: '', pictureName: '', postcode: '', price: 150000, propertyId: id2 },
      { address: 'Test', city: '', description: '', pictureName: '', postcode: '', price: 150000, propertyId: id3 },
      { address: 'Test', city: '', description: '', pictureName: '', postcode: '', price: 150000, propertyId: id4 },
      { address: 'Test', city: '', description: '', pictureName: '', postcode: '', price: 150000, propertyId: id5 },
      { address: 'Test', city: '', description: '', pictureName: '', postcode: '', price: 150000, propertyId: id6 },
    ];
    return this.properties;
  }
}
