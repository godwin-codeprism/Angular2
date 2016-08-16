import {Component} from '@angular/core';

import {Nav} from './nav.component';
import {Footer} from './footer.component'

@Component({
    templateUrl:'./app/views/users.component.html',
      directives:[Nav,Footer]
})

export class UsersComponent {};