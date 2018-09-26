import { Component, OnInit } from '@angular/core';
import { slideStateTrigger } from './animation';
import { TechService } from '../services/tech.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css'],
  animations: [
    slideStateTrigger
  ]
})
export class TechnologyComponent implements OnInit {

  constructor(public service: TechService) { }

  ngOnInit() {
  }

  
}
