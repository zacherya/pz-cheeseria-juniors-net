import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
// import { AuthenticationService } from './_auth/authentication.service';
// import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  pageTitle = "Patient Zero's Cheeseria";

  sideBarOpen = true;

  _route_url = '/home';
  fname: any;
  lname: any;

  constructor(private router: Router, private title: Title) {}

  ngOnInit() {
    this.title.setTitle(this.pageTitle);
  }

  hasRoute(route: string) {
    return this.router.url.includes(route);
  }
}
