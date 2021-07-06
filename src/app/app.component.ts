import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: ` // ES 2015 Back Ticks
    <div><h1>{{pageTitle}}</h1>
    <pm-products></pm-products>
  </div>
`
})
export class AppComponent {
  pageTitle: string = 'Acme Product Management'
  title: string | undefined;
}
