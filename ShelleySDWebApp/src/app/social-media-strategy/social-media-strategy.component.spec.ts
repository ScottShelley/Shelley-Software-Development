import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediaStrategyComponent } from './social-media-strategy.component';

describe('SocialMediaStrategyComponent', () => {
  let component: SocialMediaStrategyComponent;
  let fixture: ComponentFixture<SocialMediaStrategyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialMediaStrategyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialMediaStrategyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
