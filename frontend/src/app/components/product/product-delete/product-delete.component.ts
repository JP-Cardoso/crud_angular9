import { ProductService } from './../product.service';
import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product!: Product;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
    ) {

  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.productService.readById(id).subscribe(product => {
      this.product = product
    })
  }

  deleteProduct(): void {

    this.productService.delete(this.product.id).subscribe((product) => {
      this.productService.showMensage('Produto excluido com sucesso');
      this.product = product;

      this.router.navigate(['/products']);
    })
  }

  cancelProduct(): void {
    this.router.navigate(['/products'])
  }  

}
