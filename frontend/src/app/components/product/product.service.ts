import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  navigate(arg0: string[]) {
    throw new Error('Method not implemented.');
  }

  constructor(private snackBar: MatSnackBar) {

   }

  showMensage(msg: string): void {
    // o primeiro arg mostar a mensagem que vai aparecer, o segundo já é uma action,
    // o terceiro são algumas ações dele
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }
}
