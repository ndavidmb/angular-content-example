import {
  Component,
  ContentChild,
  ElementRef,
  Input,
  OnInit,
  TemplateRef
} from '@angular/core';

@Component({
  selector: 'second-table',
  template: `
    <table class="table table-striped">
      <thead>
        <tr>
          <ng-container
            *ngIf="theadTag"
            [ngTemplateOutlet]="theadTag"
          ></ng-container>
          <th *ngFor="let headName of headers">{{ headName }}</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let item of data">
          <ng-container
            *ngIf="theadTag"
            [ngTemplateOutlet]="tbodyTag"
          ></ng-container>
          <td *ngFor="let att of attributes">{{ item[att] }}</td>
        </tr>
      </tbody>
    </table>
  `,
})
export class SecondTableComponent implements OnInit {
  @ContentChild('header', { static: false })
  theadTag!: TemplateRef<any>;
  @ContentChild('body', { static: false }) tbodyTag!: TemplateRef<any>;
  @ContentChild('myDiv', { static: false }) myDiv!: ElementRef<HTMLDivElement>;
  @Input() data!: any[];
  @Input() headers!: any[];

  attributes!: string[];

  ngOnInit(): void {
    if (!this.data || this.data.length === 0) return;
    const [obj] = this.data;
    this.attributes = Object.keys(obj);
  }

  ngAfterContentInit(): void {
    console.log('finished', this.myDiv.nativeElement);
  }
}

@Component({
  selector: 'app-example4',
  template: `<second-table [data]="data" [headers]="headers">
    <ng-template #header>
      <th></th>
    </ng-template>

    <ng-template #body>
      <td width="5px">
        <button class="btn btn-light p-0" (click)="delete()">
          <img src="../../../assets/trash.svg" />
        </button>
      </td>
    </ng-template>

    <div #myDiv></div>
  </second-table>`,
})
export class Example4Component {
  data = [
    { name: 'David', lastName: 'Montaño', phone: '123456789' },
    { name: 'Juan', lastName: 'Medina', phone: '123456544' },
    { name: 'Luis', lastName: 'Martinez', phone: '156748564' },
  ];

  headers = ['Nombre', 'Apellido', 'Telefono'];

  delete() {
    console.log('deleted');
  }
}
