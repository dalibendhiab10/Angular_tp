import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductAddComponentComponent } from './product-add-component/product-add-component.component';
const routes: Routes = [
  {
    path: 'add',
    component: ProductAddComponentComponent,
  },
  // Add other routes here
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestprodRoutingModule { }
