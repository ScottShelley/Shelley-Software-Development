import { Component, OnInit, OnDestroy } from '@angular/core';
import { TechService } from '../services/tech.service';
import { IDisplay, IProgress, ITech } from '../technology/tech.interface';
import { AnimationEvent } from '@angular/animations';
import { itemStateTrigger } from '../technology/animation';

@Component({
  selector: 'app-tech-content',
  templateUrl: './tech-content.component.html',
  styleUrls: ['./tech-content.component.css'],
  animations: [
    itemStateTrigger
  ]
})
export class TechContentComponent implements OnInit, OnDestroy {
  error: boolean = false;
  tech: IDisplay = {
    framework: [],
    cloud: [],
    database: []
  };
  displayedTech: IDisplay = {
    framework: [],
    cloud: [],
    database: []
  };
  progress: IProgress = {
    framework: false,
    cloud: false,
    database: false
  };

  constructor(public service: TechService) { }

  ngOnInit() {
    this.service.GetTech()
      .subscribe((response: ITech[]) => {
        this.tech.framework = response.filter(data => data.type == 1);
        this.tech.cloud = response.filter(data => data.type == 2);
        this.tech.database = response.filter(data => data.type == 3);
        
        this.progress.framework = true;
        this.displayedTech.framework.push(this.tech.framework[0]);
      }, error => {
        console.log(error);
        this.error = true;
        this.progress = {
          framework: true,
          cloud: true,
          database: true
        };
      });
  }

  ngOnDestroy(): void {
    // this.displayedTech = {
    //   framework: [],
    //   cloud: [],
    //   database: []
    // };
    // this.progress = {
    //   framework: false,
    //   cloud: false,
    //   database: false
    // };
    // this.error = false;
  }

  onFrameworkAnimated(animationEvent: AnimationEvent, lastPrjId: number) {
    if (animationEvent.fromState != 'void') {
      return;
    }
    if (this.tech.framework.length > lastPrjId + 1 && this) {
      this.displayedTech.framework.push(this.tech.framework[lastPrjId + 1]);
    } else {
      this.progress.cloud = true;
      this.displayedTech.cloud.push(this.tech.cloud[0]);
    }
  }

  onCloudAnimated(animationEvent: AnimationEvent, lastPrjId: number) {
    if (animationEvent.fromState != 'void') {
      return;
    }
    if (this.tech.cloud.length > lastPrjId + 1 && this) {
      this.displayedTech.cloud.push(this.tech.cloud[lastPrjId + 1]);
    } else {
      this.progress.database = true;
      this.displayedTech.database.push(this.tech.database[0]);
    }
  }

  onDatabaseAnimated(animationEvent: AnimationEvent, lastPrjId: number) {
    if (animationEvent.fromState != 'void') {
      return;
    }
    if (this.tech.database.length > lastPrjId + 1 && this) {
      this.displayedTech.database.push(this.tech.database[lastPrjId + 1]);
    } else {
      this.tech = {
        framework: [],
        cloud: [],
        database: []
      };
    }
  }

}
