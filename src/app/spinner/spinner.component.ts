import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {
  color: string;
  mode: string;
  value: number;

  constructor() {
    this.color = 'primary';
    this.mode = 'determinate';
    this.value = 70;
   }

  ngOnInit() {
  }

}
