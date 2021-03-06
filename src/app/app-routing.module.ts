import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';
import { CreateContactComponent } from './create-contact/create-contact.component';

const routes: Routes = [
  { path: "", redirectTo: "contact-list", pathMatch: "full" },
  {
    path: 'contact-list', component: ContactListComponent
  },
  {
    path: 'create-contact', component: CreateContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
