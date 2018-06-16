import { Component, OnInit } from '@angular/core';
import { MypropertService } from '../service/mypropert.service';
import { Property } from '../../home/model/property';
import { Observable } from 'rxjs';
import { PropertyData } from '../../home/model/propertydata';

@Component({
  selector: 'app-myproperty',
  templateUrl: './myproperty.component.html',
  styleUrls: ['./myproperty.component.css']
})
export class MypropertyComponent implements OnInit {

  properties: Observable<PropertyData[]>;
  constructor(private mypropertService: MypropertService) { }

  ngOnInit() {
   this.properties = this.mypropertService.getProperties();
  }

}
