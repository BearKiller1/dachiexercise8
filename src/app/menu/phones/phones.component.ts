import { Component, OnInit } from '@angular/core';

import { ProductsService } from "../../products.service";

@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.css']
})
export class PhonesComponent implements OnInit {

  data:any;

  constructor(private Get:ProductsService) { }

  ngOnInit(): void {
      this.data = this.Get.getByName("phone");
  }

}
