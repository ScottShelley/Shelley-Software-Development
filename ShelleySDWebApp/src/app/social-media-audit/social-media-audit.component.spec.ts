import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediaAuditComponent } from './social-media-audit.component';

describe('SocialMediaAuditComponent', () => {
  let component: SocialMediaAuditComponent;
  let fixture: ComponentFixture<SocialMediaAuditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialMediaAuditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialMediaAuditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
