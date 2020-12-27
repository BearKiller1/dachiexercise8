import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from "@angular/router";

import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PhonesComponent } from './phones/phones.component';
import { LaptopsComponent } from './laptops/laptops.component';
import { HeadphonesComponent } from './headphones/headphones.component';
import { DetailsComponent } from './details/details.component';
import { ErrorComponent } from './error/error.component';
import { AllComponent } from './all/all.component';



@NgModule({
  declarations: [HomeComponent, ShopComponent, AboutComponent, ContactComponent, PhonesComponent, LaptopsComponent, HeadphonesComponent, DetailsComponent, ErrorComponent, AllComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    HomeComponent,
    ShopComponent,
    AboutComponent,
    ContactComponent,
    PhonesComponent,
    LaptopsComponent,
    HeadphonesComponent,
    DetailsComponent,
    ErrorComponent
  ]
})
export class MenuModule { }
