import { Component } from "@angular/core";

@Component({//Component decorator
selector: 'pm-root',
template:`<nav class='navbar navbar-expand navbar-light bg-light'>
    <a class='navbar-brand'>{{pageTitle}}</a>
    <ul class='nav nav-pills'>
      <li><a class='nav-link' routerLinkActive='active' routerLink='/welcome'>Home</a></li>
      <li><a class='nav-link' routerLinkActive='active' routerLink='/products'>Product List</a></li>
    </ul>
</nav>
<div class='container'>
  <router-outlet></router-outlet>
</div>`,
styleUrls: ['./app.component.css']

//  `
// <div>
// <h1>
// {{pageTitle}}
// </h1>
// <pm-products></pm-products>
// </div>`
})
export class AppComponent {  //class definition
  pageTitle : string = 'Acme Product Management';
}