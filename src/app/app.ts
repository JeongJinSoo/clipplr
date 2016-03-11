import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {List}   from '../list/list';
import {Contents}   from '../contents/contents';

@Component({
    selector: 'my-app',
    template: `
    <router-outlet></router-outlet>
  `,
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([

    {path:'/', name: 'List', component: List},
    {path:'/contents', name: 'Contents', component: Contents}
])

export class AppComponent { }