import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';

@Component({
    templateUrl: './app/views/upcoming.events.component.html',
    styleUrls:['./app/css/classroom_courses.css']
})
export class UpcomingEventsComponent implements OnInit {
    private events:any;
    private onlineEvents:any;
    constructor(private http:Http) { }

    ngOnInit() { 
        this.http.get('./data/events.json').subscribe(res => {
            this.events = res.json()
        });
        this.http.get('./data/online_events.json').subscribe(res => {
            this.onlineEvents = res.json()
        });   
    }
}