import { Component, OnInit } from '@angular/core';
import {CATALOGUE} from '../../../shared/mock-data/catalogue-produits' ;
import { Produit } from 'src/app/shared/models/produit';

@Component({
  selector: 'app-home-products',
  templateUrl: './home-products.component.html',
  styleUrls: ['./home-products.component.css']
})
export class HomeProductsComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  produit= new Produit();

  produits = CATALOGUE;
  onDetail(id: string) {
    alert(id);
  }
  onProductChange(prod: Produit) {
    this.produit = prod;
  }
}
