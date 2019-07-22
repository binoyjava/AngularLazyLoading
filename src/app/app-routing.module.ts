import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "src/app/home/home.component";

//http://localhost:4200/admin/createUser
//http://localhost:4200/admin/createProduct
//http://localhost:4200/shopping/products
const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'admin', loadChildren: './admin/admin.module#AdminModule'},
  {path: 'shopping', loadChildren: './shopping/shopping.module#ShoppingModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
