import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingRoutingModule } from './shopping-routing.module';
import { ProductsComponent } from './products/products.component';


@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    ShoppingRoutingModule
  ]
})
export class ShoppingModule { }
