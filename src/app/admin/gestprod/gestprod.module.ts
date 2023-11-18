import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestprodRoutingModule } from './gestprod-routing.module';
import { GestprodComponent } from './gestprod.component';
import { ProductAddComponentComponent } from './product-add-component/product-add-component.component';

import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    GestprodComponent,
    ProductAddComponentComponent // add this line
  ],
  imports: [
    CommonModule,
    GestprodRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    GestprodComponent
  ]
})
export class GestprodModule { }