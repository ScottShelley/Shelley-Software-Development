import { Position } from '../position';
import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { changeStateTrigger, requireStateTrigger } from './animation';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
  animations: [
    requireStateTrigger,
    changeStateTrigger
  ]
})
export class FormsComponent implements OnInit {
  private componentPosition: number;
  state: string = 'hide';

  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.componentPosition = this.el.nativeElement.offsetTop - 600;
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    if (Position.scrollPosition >= this.componentPosition) {
      this.state = 'show';
    }

  }

}
