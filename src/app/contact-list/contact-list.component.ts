import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavigationExtras, Router } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
  animations: [
    trigger('nameAnimation', [
      state('out', style({
        transform: 'translateX(100%)',
        opacity: '0'
      })),
      state('in', style({
        transform: 'translateX(0%)',
        opacity: '1'
      })),
      transition('out => in', animate('300ms ease-in'))
    ])
  ]
})
export class ContactListComponent implements OnInit {

  contactList: any = [];
  isDelete: boolean = false;
  selectedIndex = 0;
  animationState = 'in';
  currentUserList = {
    name: '',
    username: '',
    email: '',
    phone: '',
    address: '',
    companyName: '',
    website: '',
    companyPhrase: '',
    companybs: '',
  };

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.getContactDetails();
  }

  getContactDetails() {
    this.http.get('https://jsonplaceholder.typicode.com/Users').subscribe(
      (res: any) => {
        this.contactList = res;
      }
    )
  }

  delete(i: any) {
    this.selectedIndex = i;
    this.animationState = 'out';
    if (this.selectedIndex === i) {
      this.isDelete = true;
      setTimeout(() => {
        this.animationState = 'in';
      }, 300);
    }
  }

  confirmDelete(i: any) {
    this.contactList.splice(i, 1);
    this.isDelete = false;
  }

  createNewContact() {
    this.router.navigate(['create-contact']);
  }

  editDetails(i: any) {
    this.getCurrentUserDetails(i);
    let navigationExtras: NavigationExtras = {
      state: {
        name: this.contactList[i].name,
        username: this.contactList[i].username,
        email: this.contactList[i].email,
        phone: this.contactList[i].phone,
        suite: this.contactList[i].address.suite,
        zipcode: this.contactList[i].address.zipcode,
        street: this.contactList[i].address.street,
        city: this.contactList[i].address.city,
        lat: this.contactList[i].address.geo.lat,
        lng: this.contactList[i].address.geo.lng,
        website: this.contactList[i].website,
        companyName: this.contactList[i].company.name,
        catchPhrase: this.contactList[i].company.catchPhrase,
        companybs: this.contactList[i].company.bs
      }
    };

    this.router.navigate(['create-contact'], navigationExtras);
  }

  getCurrentUserDetails(i: any) {
    this.currentUserList.name = this.contactList[i].name;
    this.currentUserList.username = this.contactList[i].username;
    this.currentUserList.email = this.contactList[i].email;
    this.currentUserList.phone = this.contactList[i].phone;
    this.currentUserList.address = this.contactList[i].address.suite + ', ' + this.contactList[i].address.street + ' ' + this.contactList[i].address.city +
      '-' + this.contactList[i].address.zipcode;
    this.currentUserList.website = this.contactList[i].website;
    this.currentUserList.companyName = this.contactList[i].company.name;
    this.currentUserList.companyPhrase = this.contactList[i].company.catchPhrase;
    this.currentUserList.companybs = this.contactList[i].company.bs;
  }

}
