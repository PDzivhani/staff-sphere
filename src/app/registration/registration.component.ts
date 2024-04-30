import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';





@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  router: any;

  constructor(private http: HttpClient) {

  }
  NewEmployee(employees: {
    Name: any,
    lastname: any,
    gender: any,
    cellnumber: any,
    emailAdress: any,
    Address: any,
    IdNumber: any,
    employeeId: any,
    password: any,
    department: any,
    position: any,
    EmergencyName: any,
    emergencyRelationship: any,
    emergencyNumber: any
  }) {

    console.log(employees);

    this.http.post('http://localhost:3000/employeeData', employees).subscribe(() => {
      console.log();
    })
  }
}

