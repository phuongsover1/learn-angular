import {Directive, ViewContainerRef, TemplateRef, Input} from '@angular/core';

@Directive({
  selector: '[appTimes]'
})
export class TimesDirective {

  constructor(private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>) {}


  @Input('appTimes') set render(times: number) {
    this.viewContainer.clear();

    console.log(times)
    for (let i = 0; i < times; ++i) {
      this.viewContainer.createEmbeddedView(this.templateRef, {
        index: i,
      });
    }
  }
}
