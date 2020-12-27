import { Component, OnInit } from '@angular/core';

import { ProductsService } from "../../products.service";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  on = true;
  data:any;

  constructor(private Get:ProductsService) { }

  ngOnInit(): void {
      this.data = this.Get.getAll();
  }

}
