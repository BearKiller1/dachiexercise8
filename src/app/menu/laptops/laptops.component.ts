import { Component, OnInit } from '@angular/core';

import { ProductsService } from "../../products.service";

@Component({
  selector: 'app-laptops',
  templateUrl: './laptops.component.html',
  styleUrls: ['./laptops.component.css']
})
export class LaptopsComponent implements OnInit {

  data:any;

  constructor(private Get:ProductsService) { }

  ngOnInit(): void {
      this.data = this.Get.getByName("laptop");
  }

}
