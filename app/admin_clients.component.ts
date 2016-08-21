import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/observable';
import {UPLOAD_DIRECTIVES} from 'ng2-uploader';
import 'rxjs/add/operator/map';
interface Clients {
    name: string,
    logo: string
}
@Component({
    templateUrl: './app/views/admin/admin_clients.component.html',
    styleUrls: ['./app/css/admin/admin_events.css'],
    directives: [UPLOAD_DIRECTIVES]
})
export class AdminClientsComponent implements OnInit {
    clients: Clients[];
    uploadFile: any;
    name: string;
    logo: string;
    options: Object = {
        url: './app/endpoints/uploadclient.php'
    };
    constructor(private http: Http) { }

    ngOnInit() {
        this.getClient().subscribe(res => {
            this.clients = res;
        })
    }
    handleUpload(data): void {
        if (data && data.response) {
            data = JSON.parse(data.response);
            this.uploadFile = data;
        }
    }
    getClient(): Observable<Clients[]> {
        return this.http.get('./data/clients/clients.json').map(res => res.json());
    }
    addClient() {
        var data = {
            name: this.name,
            logo: './data/clients/images/' + this.uploadFile.generatedName
        }
        this.clients.push(data);
        this.http.post('./app/endpoints/postclients.php', this.clients).subscribe(res => {
            this.name = "";
        });
    }
}