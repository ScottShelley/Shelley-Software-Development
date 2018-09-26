import { Component, OnInit, Renderer2 } from '@angular/core';
import {
  deviceSideTrigger,
  headerSideTrigger,
  infoSideTrigger,
  navBottomStateTrigger,
  navTopStateTrigger,
  profileSideTrigger,
} from './home.animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    headerSideTrigger,
    profileSideTrigger,
    deviceSideTrigger,
    infoSideTrigger,
    navTopStateTrigger,
    navBottomStateTrigger
  ]
})
export class HomeComponent implements OnInit {
  

  constructor(private _renderer2: Renderer2) {
  }

  ngOnInit() {
    let s = this._renderer2.createElement('script');
        s.type = `IN/MemberProfile`;
        s.setAttribute('data-id', 'https://www.linkedin.com/in/scott-shelley-136769121');
        s.setAttribute('data-format', 'hover');
        s.setAttribute('data-related', 'false');
        s.setAttribute('data-text', 'Scott Shelley');
    var elementRef = document.getElementById("linkedInMember");
    elementRef.appendChild(s);
  }

}
