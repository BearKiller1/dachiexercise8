import { Component, OnInit } from '@angular/core';

import { ProductsService } from "../../products.service";

@Component({
  selector: 'app-headphones',
  templateUrl: './headphones.component.html',
  styleUrls: ['./headphones.component.css']
})
export class HeadphonesComponent implements OnInit {

  data:any;

  constructor(private Get:ProductsService) { }

  ngOnInit(): void {
      this.data = this.Get.getByName("headphone");
  }


}
