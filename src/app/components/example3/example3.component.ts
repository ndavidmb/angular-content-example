import { Component } from '@angular/core';

@Component({
  selector: 'custom-table',
  template: ` <table class="table table-striped">
    <thead>
      <ng-content select="[header]"></ng-content>
    </thead>
    <tbody>
      <ng-content select="[body]"></ng-content>
    </tbody>
  </table>`,
})
export class TableComponent {}

@Component({
  selector: 'app-example3',
  template: `<custom-table>
    <ng-container header>
      <tr>
        <th>Encabezado</th>
        <th>Encabezado 2</th>
        <th>Encabezado 3</th>
        <th>Encabezado 4</th>
      </tr>
    </ng-container>
    <ng-container body>
      <tr>
        <td>Un texto cualquiera</td>
        <td>Un texto cualquiera</td>
        <td>Un texto cualquiera</td>
        <td>Un texto cualquiera</td>
      </tr>
    </ng-container>
  </custom-table>`,
})
export class Example3Component {}
