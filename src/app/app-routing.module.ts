import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PriceComponent } from './price/price.component';
import { PriceDetailComponent } from './price-detail/price-detail.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductListComponent } from './product-list/product-list.component';


const routes: Routes = [
  {
    path : '',
    component : HomeComponent
  },
  {
    path : 'price',
    component : PriceComponent
  },
  {
    path :'about',
    component : AboutComponent
  },
  {
    path :'product',
    component : ProductListComponent
  },
  {
    path : 'product/create',
    component : ProductCreateComponent
  },
  {
    path : 'price/:id',
    component : PriceDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
