import { Position } from './position';
import { AppInsightsService } from 'ng2-appinsights';
import { log } from 'util';
import { Component, HostListener } from '@angular/core';
import { Http } from '@angular/http';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	constructor(private appinsightsService: AppInsightsService, private router: Router) {
    this.appinsightsService.Init({
      instrumentationKey: 'f2c14403-61f2-4c6a-9cfd-26df3d3cf2b3', // Required field
      enableDebug: false,
      disableTelemetry: true
    });
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        (<any>window).ga('set', 'page', event.urlAfterRedirects);
        (<any>window).ga('send', 'pageview');
      }
    });
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    Position.scrollPosition = window.pageYOffset;
  }

  onDeactivate() {
    window.scrollTo(0, 0)
  }

}
