import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/observable';

@Component({
    templateUrl: './app/views/admin/login.component.html',
    styleUrls: ['./app/css/admin/login.css']
})
export class LoginComponent implements OnInit {
    username: string;
    password: string;
    token: string;
    constructor(
        private http: Http,
        private route: ActivatedRoute,
        private router:Router
    ) {}

    ngOnInit() {
        this.token = localStorage.getItem('qlstoken');
        if (this.token !== undefined && this.token !== '' && this.token !== null) {
            let currentToken = { token: this.token };
            this.http.post('./app/endpoints/checktoken.php', currentToken).subscribe(res => {
                if (res.json() === 'authorized') {
                    this.router.navigate(['/dashboard']);
                    console.log('Welcome');
                }
                else {
                    console.log('You are a Liar');
                }
            });
        }
        else {
            console.log('please login');
        }
    }

    onLogin() {
        let data = {
            username: this.username,
            password: this.password
        }
        this.http.post('./app/endpoints/login.php', data).subscribe(res => {
            if(res.json() !== "ERROR")
            {
                localStorage.setItem('qlstoken', res.json());
                this.router.navigate(['/dashboard']);
            }else{
                console.log('Incorrect username or password');
            }
            
        })
    }

}