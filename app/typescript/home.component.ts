import { Component } from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';

import {Nav} from './nav.component';
import {Banner} from './banner.component';
import {Events} from './events.component';
import {Courses} from './courses.component';
import {Testimonies} from './testimonies.component';
import {Clients} from './clients.component';
import {Footer} from './footer.component';

@Component({
  templateUrl: './app/views/home.component.html',
  directives: [Nav, Banner, Events, Courses, Testimonies, Clients, Footer],
  providers: [HTTP_PROVIDERS]
})
export class HomeComponent { }
