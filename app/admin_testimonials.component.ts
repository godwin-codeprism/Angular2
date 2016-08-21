import { Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/observable';
import {UPLOAD_DIRECTIVES} from 'ng2-uploader';
import 'rxjs/add/operator/map';
interface Testimonies {
    name: string,
    message: string,
    image: string
}
@Component({
    templateUrl: './app/views/admin/admin_testimonials.component.html',
    styleUrls:['./app/css/admin/admin_events.css'],
    directives: [UPLOAD_DIRECTIVES]
})
export class AdminTestimonialsComponent implements OnInit {
    testimonies: Testimonies[];
    uploadFile: any;
    name:string;
    message:string;
    image:string;
    options: Object = {
        url: './app/endpoints/upload.php'
    };
    constructor(private http: Http) { }

    ngOnInit() { 
        this.getTestimonies().subscribe(res => {
            this.testimonies = res;
        })
    }

    handleUpload(data): void {
        if (data && data.response) {
            data = JSON.parse(data.response);
            this.uploadFile = data;
        }
    }
    getTestimonies(): Observable<Testimonies[]> {
        return this.http.get('./data/testimonials/testimonials.json').map(res => res.json());
    }
    addTestimonies(){
        var data = {
            name: this.name,
            message:this.message,
            image:'./data/testimonials/images/'+this.uploadFile.generatedName
        }
        this.testimonies.push(data);
        this.http.post('./app/endpoints/posttestimonies.php',this.testimonies).subscribe(res =>{
            this.name = "";
            this.message = "";
        });
    }
}