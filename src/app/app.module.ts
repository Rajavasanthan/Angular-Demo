import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PriceCardComponent } from "./price-card/price-card.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { AboutComponent } from "./about/about.component";
import { HomeComponent } from "./home/home.component";
import { PriceComponent } from "./price/price.component";
import { PriceDetailComponent } from "./price-detail/price-detail.component";
import { ProductCreateComponent } from "./product-create/product-create.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PriceCardComponent,
    NavBarComponent,
    AboutComponent,
    HomeComponent,
    PriceComponent,
    PriceDetailComponent,
    ProductCreateComponent,
    ProductListComponent,
  ],
  imports: [BrowserModule,FormsModule, AppRoutingModule, ReactiveFormsModule,HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
