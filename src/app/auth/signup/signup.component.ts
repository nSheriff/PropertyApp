import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthserviceService } from '../service/authservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authService: AuthserviceService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {

    console.log(form);

    this.authService.signUpUser({
      email: form.value.email,
      password: form.value.password

    });

  }

}
