import {Component, AfterViewInit} from '@angular/core';
declare var $: any;
@Component({
    selector: 'g-events',
    templateUrl: './app/views/events.component.html',
    styleUrls: ['./app/css/events.css']
})

export class Events implements AfterViewInit {
    ngAfterViewInit() {
        $('.panel-events').perfectScrollbar();
        $('#myCarousel').carousel({
            interval: 1500,
            pause: "false"
        });
    }
}
