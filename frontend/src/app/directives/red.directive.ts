import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRed]'
})
export class RedDirective {

  // injetando uma referencia para o elemento
  constructor(private el: ElementRef) {
    el.nativeElement.style.color = '#e35e6b';
   }

}
