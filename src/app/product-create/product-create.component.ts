import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: "app-product-create",
  templateUrl: "./product-create.component.html",
  styleUrls: ["./product-create.component.css"],
})
export class ProductCreateComponent implements OnInit {
  userForm;
  constructor(private productService:ProductService,private router:Router) {
    this.userForm = new FormGroup({
      name: new FormControl('',[Validators.required,Validators.minLength(5)]),
      email: new FormControl('',[Validators.required,Validators.email]),
      age: new FormControl('',[Validators.required,Validators.min(18)]),
      country: new FormControl(),
    });
  }

  ngOnInit() {}

  senData() {
    if(this.userForm.valid){
      // console.log(this.userForm.value);
      this.productService.postProduct(this.userForm.value).subscribe((productData) => {
        this.router.navigate(['/product'])
      })
    }
  }
}
