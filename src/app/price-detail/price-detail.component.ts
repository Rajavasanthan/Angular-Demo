import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { from } from 'rxjs';
@Component({
  selector: 'app-price-detail',
  templateUrl: './price-detail.component.html',
  styleUrls: ['./price-detail.component.css']
})
export class PriceDetailComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute) { 
    console.log(this.activatedRoute.snapshot.params.id)
  }

  ngOnInit() {
  }

}
