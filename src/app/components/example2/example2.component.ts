import { Component } from '@angular/core';

@Component({
  selector: 'custom-button-child',
  template: `
    <button class="btn btn-primary" (click)="save()">
      <ng-content></ng-content>
    </button>
  `,
})
export class ButtonComponentChild {
  save() {
    console.log('save');
  }
}

@Component({
  selector: 'app-example2',
  template: `<custom-button-child>Prueba 2</custom-button-child>`,
  // template: `<custom-button-child>
  //   <span class="text-primary">Prueba 2</span>
  // </custom-button-child>`,
})
export class Example2Component {}
