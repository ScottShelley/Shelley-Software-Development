import { Position } from '../position';
import { log } from 'util';
import { Component, OnDestroy, OnInit, ElementRef, HostListener } from '@angular/core';
import { Subscription } from "rxjs";
import { TimerObservable } from "rxjs/observable/TimerObservable";
import { awsImgStateTrigger, awsStateTrigger, azureStateTrigger, cloudImgStateTrigger } from './animation';

@Component({
  selector: 'app-cloud',
  templateUrl: './cloud.component.html',
  styleUrls: ['./cloud.component.css'],
  animations: [ 
    awsImgStateTrigger,
    cloudImgStateTrigger,
    azureStateTrigger,
    awsStateTrigger
  ]
})
export class CloudComponent implements OnInit, OnDestroy {
  private timeE: number = 10;
  private subscription: Subscription;
  isAwsImg: boolean = true;
  private componentPosition: number;
  state = 'hide';

  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.componentPosition = this.el.nativeElement.offsetTop - 600;
    let timer = TimerObservable.create(2000, 1000);
    this.subscription = timer.subscribe(t => {
      if (+t === this.timeE) {
        this.timeE += 10;
        //console.log(this.timeE + ' test');
        this.isAwsImg =! this.isAwsImg;
        //console.log(this.isAwsImg);
      }
    });
  }


    public ngOnDestroy(): void {
        this.timeE = 10;
        this.subscription.unsubscribe();
    }
  
    @HostListener('window:scroll', ['$event'])
    checkScroll() {
      if (Position.scrollPosition >= this.componentPosition) {
        this.state = 'show';
      } // else {
      //   this.state = 'hide';
      // }
  
    }
}
