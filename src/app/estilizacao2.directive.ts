import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[btn2]'
})
export class Estilizacao2Directive {


  constructor(private el: ElementRef, private renderer: Renderer2) {

    this.renderer.setStyle(this.el.nativeElement, 'background-color', '#bf0010') /* segunda maneira de fazer */

  }


}
