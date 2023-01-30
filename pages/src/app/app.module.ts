import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestDirective } from './test.directive';
import { ClassDirective } from './class.directive';

@NgModule({
  declarations: [
    AppComponent,
    TestDirective,
    ClassDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
