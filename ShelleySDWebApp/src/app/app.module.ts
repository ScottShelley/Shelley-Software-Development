import { RouterModule } from '@angular/router';
import { AppInsightsModule } from 'ng2-appinsights';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { TechnologyComponent } from './technology/technology.component';
import { ContactComponent } from './contact/contact.component';
import { ContactService } from './contact/contact.service';
import { CloudComponent } from './cloud/cloud.component';
import { FormsComponent } from './forms/forms.component';
import { HomeComponent } from './home/home.component';
import { FreeSeoAssessmentComponent } from './free-seo-assessment/free-seo-assessment.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SocialMediaStrategyComponent } from './social-media-strategy/social-media-strategy.component';
import { SocialMediaAuditComponent } from './social-media-audit/social-media-audit.component';
import { EmailService } from './services/email.service';
import { SeoComponent } from './seo/seo.component';
import { WebDevelopmentComponent } from './web-development/web-development.component';
import { TechContentComponent } from './tech-content/tech-content.component';
import { TechService } from './services/tech.service';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TechnologyComponent,
    ContactComponent,
    CloudComponent,
    FormsComponent,
    HomeComponent,
    FreeSeoAssessmentComponent,
    NotFoundComponent,
    SocialMediaStrategyComponent,
    SocialMediaAuditComponent,
    SeoComponent,
    WebDevelopmentComponent,
    TechContentComponent
  ],
  imports: [
	  BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    AppInsightsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'free-seo-assessment', component: FreeSeoAssessmentComponent },
      { path: 'free-social-media-audit', component: SocialMediaAuditComponent },
      { path: 'seo', component: SeoComponent },
      { path: 'web-development', component: WebDevelopmentComponent},
      { path: '**', redirectTo: '' }
    ])
  ],
  providers: [
    ContactService,
    TechService,
    EmailService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
