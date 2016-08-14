import { Component } from '@angular/core';
import {Nav} from './nav.component';
import {Footer} from './footer.component'

@Component({
  selector: 'qls',
  templateUrl: './app/views/app.component.html',
  directives:[Nav,Footer]
})
export class AppComponent { }
