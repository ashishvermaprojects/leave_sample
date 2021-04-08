import { Component } from '@angular/core';

@Component({
  templateUrl: 'profile.component.html',
  styleUrls: [ './profile.component.scss' ]
})

export class ProfileComponent {
  employee: any;
  colCountByScreen: object;

  constructor() {
    this.employee = {
      ID: 7,
      FirstName: 'Ashish',
      LastName: 'Verma',
      Prefix: 'Mr.',
      Position: 'Controller',
      Picture: '',
      BirthDate: new Date('1997/04/28'),
      HireDate: new Date(),
      /* tslint:disable-next-line:max-line-length */
      Notes: 'Ashish is a ..........',
      Address: 'Mohali'
    };
    this.colCountByScreen = {
      xs: 1,
      sm: 2,
      md: 3,
      lg: 4
    };
  }
}
