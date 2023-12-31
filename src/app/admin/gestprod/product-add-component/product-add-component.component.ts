import { Component ,OnInit} from '@angular/core';

import { FormControl,FormGroup,FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-product-add-component',
  templateUrl: './product-add-component.component.html',
  styleUrls: ['./product-add-component.component.css']
})

export class ProductAddComponentComponent implements OnInit {
  productAddForm!: FormGroup;
  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
    this.productAddForm = this.fb.group({
      nameControl: [''],
      prixControl: [''],
      descriptionControl: [''],
      categorieControl: [''],
      imageUploadControl: ['']
    });
  }
  onAjouter() {
    console.log(this.productAddForm.value);
  }
}



