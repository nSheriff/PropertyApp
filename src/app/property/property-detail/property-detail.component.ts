import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Property } from '../../home/model/property';
import { PropertyService } from '../../home/service/property.service';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {
  property: Property;
  constructor(private route: ActivatedRoute, private proService: PropertyService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      console.log(params);
      console.log(params.get('propertyId'));
      const propertyId = Number(params.get('id'));
      if (propertyId !== 0) {
          this.proService.getPropertyById(propertyId).subscribe(
            data => {
              console.log('Data: ' + data.address);
              this.property = data;
            });
      }
    });
  }

}
