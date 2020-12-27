import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './menu/home/home.component';
import { ShopComponent } from './menu/shop/shop.component';
import { AboutComponent } from './menu/about/about.component';
import { ContactComponent } from './menu/contact/contact.component';
import { PhonesComponent } from './menu/phones/phones.component';
import { LaptopsComponent } from './menu/laptops/laptops.component';
import { HeadphonesComponent } from './menu/headphones/headphones.component';
import { DetailsComponent } from './menu/details/details.component';
import { ErrorComponent } from './menu/error/error.component';
import { AllComponent } from './menu/all/all.component';

const routes: Routes = [
  {
    path:"home",
    component:HomeComponent,
  },
  {
    path:"shop",
    component:ShopComponent,
    children:[
      {
        path:"laptops",
        component:LaptopsComponent,
      },
      {
        path:"phones",
        component:PhonesComponent,
      },
      {
        path:"headphones",
        component:HeadphonesComponent,
      },
      {
        path:"all",
        component:AllComponent,
      },
      {
        path:"details/:id",
        component:DetailsComponent,
      },
      {
        path:"",
        redirectTo:"all",
        pathMatch:"full",
      }
    ]
  },
  {
    path:"about",
    component:AboutComponent,
  },
  {
    path:"contact",
    component:ContactComponent,
  },
  {
    path:"**",
    component:ErrorComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
