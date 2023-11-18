import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestprodComponent } from './gestprod/gestprod.component';
const routes: Routes = [
  {
    path: 'admin',
    component: GestprodComponent,  },
  // Add other routes here
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
