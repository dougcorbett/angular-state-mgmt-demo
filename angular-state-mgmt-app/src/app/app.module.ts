import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { CustomerAddComponent } from './components/customers/customer-add/customer-add.component';
import { CustomerEditComponent } from './components/customers/customer-edit/customer-edit.component';
import { CustomerListComponent } from './components/customers/customer-list/customer-list.component';
import { CustomerThumbnailComponent } from './components/customers/customer-thumbnail/customer-thumbnail.component';
import { CustomerDetailComponent } from './components/customers/customer-detail/customer-detail.component';

import { CustomerOrderListComponent } from './components/customers/customer-orders/customer-order-list/customer-order-list.component';
import { CustomerOrderDetailComponent } from './components/customers/customer-orders/customer-order-detail/customer-order-detail.component';

import { SeedDataComponent } from './components/admin/seed-data/seed-data.component';

import { CustomerService } from './services/customer.service';
import { GoBackButtonComponent } from './components/go-back-button/go-back-button.component';

const appRoutes: Routes = [
  { pathMatch: 'full',  path: '', component: HomeComponent },
  { pathMatch: 'full',  path: 'customers', component: CustomerListComponent },
  { pathMatch: 'full',  path: 'customers/new', component: CustomerAddComponent },
  { pathMatch: 'full',  path: 'customers/:id', component: CustomerDetailComponent },
  { pathMatch: 'full',  path: 'customers/:id/edit', component: CustomerEditComponent },
  { pathMatch: 'full',  path: 'seed-data', component: SeedDataComponent },
  { pathMatch: 'full',  path: 'contact', component: ContactUsComponent },
  { pathMatch: 'full',  path: '**', component: PageNotFoundComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    PageNotFoundComponent,
    ContactUsComponent,
    CustomerAddComponent,
    CustomerEditComponent,
    CustomerListComponent,
    CustomerThumbnailComponent,
    CustomerDetailComponent,    
    CustomerOrderListComponent,
    CustomerOrderDetailComponent,
    SeedDataComponent,
    GoBackButtonComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }