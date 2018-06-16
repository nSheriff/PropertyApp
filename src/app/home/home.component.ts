import { Component, OnInit } from '@angular/core';
import { Property } from './model/property';
import { PropertyService } from './service/property.service';
import { MypropertService } from '../property/service/mypropert.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  properties: Property[] = [];
  constructor(private propertyService: PropertyService,  private mypropertService: MypropertService) { }

  ngOnInit() {
     this.propertyService.getProperties().subscribe(
        data => {
          console.log('Data: ' + data[0].address);
          this.properties = data;
        });
  }

  onAddToFavourite(property: Property) {
      this.mypropertService.addToMyFavourite(property);
  }

}
