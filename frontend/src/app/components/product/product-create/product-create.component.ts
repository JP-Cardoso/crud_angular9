import { Product } from './../product.model';
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
  product:Product = {
    name: '',
    price: 0,
    id: 0
  }

  constructor (private productService: ProductService, private router: Router) {

  }

  ngOnInit(): void {
  }
  // fazendo um binding - ligação de evento
  // fazendoAlgo(): void {
  //   console.log('Fazendo algo!!!');
  // }
  createProduct(): void{

    this.productService.create(this.product).subscribe(() => {
      this.productService.showMensage('Produto Criado');
      this.router.navigate(['/products']);
    });

  }

  cancelProduct(): void{
    this.router.navigate(['/products']);
  }

}
