import { Component, OnInit} from '@angular/core';
import {UPLOAD_DIRECTIVES} from 'ng2-uploader';

@Component({
    templateUrl: './app/views/admin/admin_testimonials.component.html',
    directives: [UPLOAD_DIRECTIVES]
})
export class AdminTestimonialsComponent implements OnInit {
    uploadFile: any;
    options: Object = {
        url: './app/endpoints/upload.php'
    };
    constructor() { }

    ngOnInit() { }

    handleUpload(data): void {
        if (data && data.response) {
            data = JSON.parse(data.response);
            this.uploadFile = data;
        }
    }
}