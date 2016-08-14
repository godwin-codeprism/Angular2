import { Component } from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';

import {Banner} from './banner.component';
import {Events} from './events.component';
import {Courses} from './courses.component';
import {Testimonies} from './testimonies.component';
import {Clients} from './clients.component';

@Component({
  templateUrl: './app/views/home.component.html',
  directives: [Banner, Events, Courses, Testimonies, Clients],
  providers: [HTTP_PROVIDERS]
})
export class HomeComponent { }
