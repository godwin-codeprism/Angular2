import { Component, OnInit } from '@angular/core';
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/observable';
import 'rxjs/add/operator/map';
interface EventList {
    training: string,
    date: string,
    location: string,
    link: string
}
interface OnlineEventList {
    training: string,
    date: string,
    location: string,
    link: string
}
@Component({
    templateUrl: './app/views/admin/admin_events.component.html',
    styleUrls: ['./app/css/admin/admin_events.css']
})
export class AdminEventsComponent implements OnInit {
    private events: EventList[];
    private onlineEvents: OnlineEventList[];
    training: string;
    date: string;
    location: string;
    link: string;
    onlineTraining: string;
    onlineDate: string;
    onlineLocation: string;
    onlineLink: string;
    constructor(private http: Http) { }

    ngOnInit() {
        this.getEventsList().subscribe(res => {
            this.events = res;
        });
        this.getOnlineEventsList().subscribe(res => {
            this.onlineEvents = res;
        });
    }

    getEventsList(): Observable<EventList[]> {
        return this.http.get('./data/events.json').map(res => res.json());
    }
    addEvent() {
        var data = {
            training: this.training,
            date: this.date,
            location: this.location,
            link: this.link
        }
        this.events.push(data);
        this.http.post('./app/endpoints/postevents.php',this.events).subscribe(res=>{
            this.training = '';
            this.date = '';
            this.location = '';
            this.link = '';
        });
    }
     getOnlineEventsList(): Observable<EventList[]> {
        return this.http.get('./data/online_events.json').map(res => res.json());
    }
    addOnlineEvent() {
        var onlineData = {
            training: this.onlineTraining,
            date: this.onlineDate,
            location: this.onlineLocation,
            link: this.onlineLink
        };
        this.onlineEvents.push(onlineData);
        this.http.post('./app/endpoints/postonlineevents.php',this.onlineEvents).subscribe(res=>{
            this.onlineTraining = '';
            this.onlineDate = '';
            this.onlineLocation = '';
            this.onlineLink = '';
        });
    }
}