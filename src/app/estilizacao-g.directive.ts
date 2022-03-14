import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[btn]'
})
export class EstilizacaoGDirective {


  constructor(private el: ElementRef, private renderer: Renderer2) {

    this.renderer.setStyle(this.el.nativeElement, 'background-color', '#da70d6') /* segunda maneira de fazer */

  }

}


