import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {

  constructor(private element: ElementRef) {
    // NEVER DO THIS !!!
    this.element.nativeElement.style.backgroundColor = this.backgroundColor;

  }

  @Input() set backgroundColor(color: string) {
    this.element.nativeElement.style.backgroundColor = color;
  }

}
