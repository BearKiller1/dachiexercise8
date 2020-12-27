import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from "@angular/router";
import { ProductsService } from "../../products.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  data:any;
  constructor(private route:ActivatedRoute = new ActivatedRoute(), private Get:ProductsService) { }

  ngOnInit(): void {
    var data;
    data = this.route.snapshot.paramMap.get("id");
    this.data = this.Get.getID(data);
  }

}
