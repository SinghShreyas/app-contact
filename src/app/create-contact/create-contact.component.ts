import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.scss']
})
export class CreateContactComponent implements OnInit {

  userDetails: any;
  Name = 'Test';

  constructor(private router: Router) {

    const navigation = this.router.getCurrentNavigation();
    this.userDetails = navigation?.extras.state as {
      name: string,
      username: string,
      email: string,
      phone: string,
      suite: string,
      zipcode: string,
      street: string,
      city: string,
      lat: string,
      lng: string,
      website: string,
      companyName: string,
      catchPhrase: string,
      companybs: string,
    }
  }

  ngOnInit(): void {
  }

  cancel() {
    this.router.navigate(['contact-list']);
  }

}
