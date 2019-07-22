import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserCreationComponent } from "src/app/admin/user-creation/user-creation.component";
import { ProductCreationComponent } from "src/app/admin/product-creation/product-creation.component";


const routes: Routes = [
  {
    path: 'createUser',
    component: UserCreationComponent
  },
  {
    path: 'createProduct',
    component: ProductCreationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
