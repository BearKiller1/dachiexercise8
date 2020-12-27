import { Component, OnInit } from '@angular/core';

import { ProductsService } from "../../products.service";

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  data:any;

  constructor(private Get:ProductsService) { }

  ngOnInit(): void {
      this.data = this.Get.getAll();
  }

}
