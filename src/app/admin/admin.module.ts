import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { UserCreationComponent } from './user-creation/user-creation.component';
import { ProductCreationComponent } from './product-creation/product-creation.component';


@NgModule({
  declarations: [UserCreationComponent, ProductCreationComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
