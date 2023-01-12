import { Product } from './product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar'
import { EMPTY, Observable } from 'rxjs';
import {map, catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  navigate(_arg0: string[]) {
    throw new Error('Method not implemented.');
  }

  baseUrl = 'http://localhost:3001/products'

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {

   }

  showMensage(msg: string, isError: boolean = false): void {
    // o primeiro arg mostar a mensagem que vai aparecer, o segundo já é uma action,
    // o terceiro são algumas ações dele
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['.msg-error'] : ['.msg-success']
    });
    
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    console.log(e)

    this.showMensage('Ocorreu um erro!', true);
    return EMPTY;
  }

  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl);
  }

  readById(id: any): Observable<Product> {
    const url = `${this.baseUrl}/${id}`;

    return this.http.get<Product>(url);
  }

  update(product: Product): Observable<Product> {
    const url = `${this.baseUrl}/${product.id}`;

    return this.http.put<Product>(url, product);
  }

  delete(id: any): Observable<Product> {
    const url = `${this.baseUrl}/${id}`;

    return this.http.delete<Product>(url);
  }
}
