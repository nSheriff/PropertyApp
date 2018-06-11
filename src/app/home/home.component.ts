import { Component, OnInit } from '@angular/core';
import { Property } from './model/property';
import { PropertyService } from './service/property.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  properties: Property[] = [];
  constructor(private propertyService: PropertyService) { }

  ngOnInit() {
    this.properties = this.propertyService.getProperties();
  }

}
