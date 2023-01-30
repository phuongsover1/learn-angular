import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {

  constructor(private element: ElementRef) {
  }

  @Input('appClass') set backgroundColor(classObj: any) {
    for (let key in classObj) {
      classObj[key] === true ? this.element.nativeElement.classList.add(key) : this.element.nativeElement.classList.remove(key);
    }
  }

}
