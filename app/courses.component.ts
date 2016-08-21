import { Component, Injectable, OnInit } from '@angular/core';
import {Http, HTTP_PROVIDERS, Response} from '@angular/http';
import {Observable} from 'rxjs/observable';
import 'rxjs/add/operator/map';


import {CoursesInterface} from './courses.interface'
@Injectable()
@Component({
    selector: 'g-courses',
    templateUrl: './app/views/courses.component.html',
    styleUrls: ['./app/css/courses.css'],
})

export class Courses {
    query = '';
    private courses:CoursesInterface[];
    private dataUrl = './data/courses.json';

    constructor(private http: Http) {

    }
    ngOnInit(){
         this.getData().subscribe(courseData => {
           this.courses = courseData;
        });
    }
    getData(): Observable<CoursesInterface[]> {
        return this.http.get(this.dataUrl)
            .map(res => res.json());
    }
    onSearch(course){
        this.getData().subscribe(courseData => {
           this.courses = courseData.filter(function(value,index,array){
               if(value.title.toLowerCase().indexOf(course.toLowerCase()) !== -1)
               {
                   return true;
               }
               else{
                   return false;
               }
           });
        });
    }
}
