import { Component, OnInit } from '@angular/core';
import { Property } from './model/property';
import { PropertyService } from './service/property.service';
import { MypropertService } from '../property/service/mypropert.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthserviceService } from '../auth/service/authservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  properties: Property[] = [];
  constructor(private propertyService: PropertyService, private authSer: AuthserviceService,
    private mypropertService: MypropertService, private router: Router) { }

  ngOnInit() {
     this.propertyService.getProperties().subscribe(
        data => {
          console.log('Data: ' + data[0].address);
          this.properties = data;
        });
  }

  onAddToFavourite(property: Property) {
    if (this.authSer.isAuthenticated()) {
      this.mypropertService.addToMyFavourite(property);
    } else {
      this.router.navigate(['/login']);
    }
  }

  onSubmit(f: NgForm) {
    console.log(f);
    console.log(f.value.search);
    if (f.value.search !== undefined && f.value.search !== '') {
      this.propertyService.getPropertyByPostcode(f.value.search).subscribe(
        data => {
          console.log('Data: ' + data[0].address);
          this.properties = data;
        });
  }
  }

}
