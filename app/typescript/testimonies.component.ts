import {Component, AfterViewInit} from '@angular/core';
declare var $: any;
@Component({
    selector: 'g-testimonies',
    templateUrl: './app/views/testimonies.component.html',
    styleUrls: ['./app/css/testimonies.css']
})

export class Testimonies implements AfterViewInit {
    ngAfterViewInit() {
        $('#cConfesCarousel').carousel({
            interval: 2500,
            pause: "false"
        });
    }
}
