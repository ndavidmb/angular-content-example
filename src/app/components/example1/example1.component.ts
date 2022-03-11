import { Component, Input } from '@angular/core';

@Component({
  selector: 'custom-button',
  template: `
    <button
      class="btn btn-light d-flex align-center etc classes"
      (click)="save()"
    >
      {{ title }}
    </button>
  `,
  // template: `
  //   <button
  //     class="btn btn-light d-flex align-center etc classes"
  //     (click)="save()"
  //     [class.text-primary]="textPrimary"
  //   >
  //     {{ title }}
  //   </button>
  // `,
})
export class ButtonComponent {
  @Input() title!: string;

  // @Input() textPrimary = false;

  save() {
    console.log('save');
  }
}

@Component({
  selector: 'app-example1',
  template: ` <custom-button title="Prueba"></custom-button> `,
  // template: `
  //   <custom-button title="Prueba" [textPrimary]="true"></custom-button>
  // `,
})
export class Example1Component {
  save() {
    console.log('save');
  }
}
