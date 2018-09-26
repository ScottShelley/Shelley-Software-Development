import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeSeoAssessmentComponent } from './free-seo-assessment.component';

describe('FreeSeoAssessmentComponent', () => {
  let component: FreeSeoAssessmentComponent;
  let fixture: ComponentFixture<FreeSeoAssessmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreeSeoAssessmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeSeoAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
