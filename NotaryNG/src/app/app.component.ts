import {Component} from '@angular/core';
import { PersonService } from "./persons/person.service";

@Component({
  selector: 'pm-root',
  template: `
    <div>
      <nav class='navbar navbar-default'>
        <div class='container-fluid'>
          <a class='navbar-brand'>{{pageTitle}}</a>
          <ul class='nav navbar-nav'>
            <li><a [routerLink]="['/welcome']">Home</a><li>
            <li><a [routerLink]="['/persons']">Notary Persons</a></li>
          </ul>
        </div>
      </nav>
      <div class='container'>
          <router-outlet></router-outlet>
    </div>
    `,
    providers: [ PersonService ]
})
export class AppComponent {
  pageTitle : string = 'Colorado Notary Public'
}
