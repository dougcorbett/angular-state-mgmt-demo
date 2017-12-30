import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HouseListComponent } from './components/houses/house-list/house-list.component';
import { HouseDetailComponent } from './components/houses/house-detail/house-detail.component';
import { HouseAddComponent } from './components/houses/house-add/house-add.component';
import { HouseEditComponent } from './components/houses/house-edit/house-edit.component';
import { HouseThumbnailComponent } from './components/houses/house-thumbnail/house-thumbnail.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { CustomerAddComponent } from './components/customers/customer-add/customer-add.component';
import { CustomerEditComponent } from './components/customers/customer-edit/customer-edit.component';
import { CustomerListComponent } from './components/customers/customer-list/customer-list.component';
import { CustomerThumbnailComponent } from './components/customers/customer-thumbnail/customer-thumbnail.component';
import { CustomerDetailComponent } from './components/customers/customer-detail/customer-detail.component';

import { CustomerService } from './services/customer.service';

const appRoutes: Routes = [
  { pathMatch: 'full',  path: '', component: HomeComponent },
  { pathMatch: 'full',  path: 'houses', component: HouseListComponent },
  { pathMatch: 'full',  path: 'contact', component: ContactUsComponent },
  { pathMatch: 'full',  path: '**', component: PageNotFoundComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HouseListComponent,
    HouseDetailComponent,
    HouseAddComponent,
    HouseEditComponent,
    HouseThumbnailComponent,
    FooterComponent,
    HomeComponent,
    PageNotFoundComponent,
    ContactUsComponent,
    CustomerAddComponent,
    CustomerEditComponent,
    CustomerListComponent,
    CustomerThumbnailComponent,
    CustomerDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [customerService],
  bootstrap: [AppComponent]
})
export class AppModule { }