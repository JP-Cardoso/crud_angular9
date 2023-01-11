// O próprio angular fica responsavel de instanciar o elemento router,
// para que ele seja utilizado na aplicação.
// Preciso apenas importa-lo e passar ao contrutor que vamos utilizar o router.
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit{

  constructor(private router: Router) {

  }

  ngOnInit(): void {
    
  }

  navigateToProductCreate(): void {
    // Passando a rota para a função 
    this.router.navigate(['/products/create'])
  }

}
