import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appMyHeightLight]'
})
export class MyHeightLightDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
  }

}
