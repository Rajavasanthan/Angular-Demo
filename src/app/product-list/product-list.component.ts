import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  listData;
  constructor(private product:ProductService,private router:Router) { 
    this.product.listProduct().subscribe((data) => {
      this.listData = data;
    })
  }

  ngOnInit() {
  }

  createProduct(){
    this.router.navigate(['/product/create'])
  }



}
