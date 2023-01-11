import { Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  // propLegal = "qualquer";

  constructor (private productService: ProductService, private route: Router) {

  }

  ngOnInit(): void {
  }
  // fazendo um binding - ligação de evento
  // fazendoAlgo(): void {
  //   console.log('Fazendo algo!!!');
  // }
  createProduct(): void{
    this.productService.showMensage('Produto Criado')
  }

  cancelProduct(): void{
    this.productService.navigate(['/products'])
  }

}
