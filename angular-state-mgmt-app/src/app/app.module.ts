import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


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
    ContactUsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
