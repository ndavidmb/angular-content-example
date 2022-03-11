import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {
  ButtonComponent,
  Example1Component,
} from './components/example1/example1.component';
import {
  ButtonComponentChild,
  Example2Component,
} from './components/example2/example2.component';
import {
  Example3Component,
  TableComponent,
} from './components/example3/example3.component';
import { Example4Component, SecondTableComponent } from './components/example4/example4.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    Example1Component,
    Example2Component,
    ButtonComponentChild,
    Example3Component,
    TableComponent,
    Example4Component,
    SecondTableComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
