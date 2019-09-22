import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlighteQuote]'
})
export class HighlighteQuoteDirective {

  constructor(private elem:ElementRef) {}
    private quoteDeco(action:string){
    this.elem.nativeElement.style.backgroundColor='yellow';
  }
   

}
