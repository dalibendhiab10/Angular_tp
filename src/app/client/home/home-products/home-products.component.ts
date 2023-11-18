import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/shared/models/produit';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-home-products',
  templateUrl: './home-products.component.html',
  styleUrls: ['./home-products.component.css']
})
export class HomeProductsComponent implements OnInit {
  produits!: Produit[]
  produit = new Produit(); 
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.produits = this.productService.getProducts();
  }

  onDetail(id: string) {
    alert(id);
  }

  onProductChange(prod: Produit) {
    this.produit = prod;
  }
}