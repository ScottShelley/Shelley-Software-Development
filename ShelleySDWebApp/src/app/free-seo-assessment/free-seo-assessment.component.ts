import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailService } from '../services/email.service';

@Component({
  selector: 'app-free-seo-assessment',
  templateUrl: './free-seo-assessment.component.html',
  styleUrls: ['./free-seo-assessment.component.css']
})
export class FreeSeoAssessmentComponent implements OnInit {
  seoForm: FormGroup;

  constructor(private fb: FormBuilder, private service: EmailService) {
    this.seoForm = fb.group({
      'firstName': [null, Validators.required],
      'surname': [null, Validators.required],
      'email': [null, Validators.compose(
        [
          Validators.required,
          Validators.email
        ]
      )],
      'number': [null, Validators.required],
      'businessName': [null, Validators.required],
      'websiteURL': [null, Validators.required]
    });
  }

  ngOnInit() {
  }

  submitForm() {
    // console.log(JSON.stringify(this.seoForm.value));
    this.service.postSEO(this.seoForm.value)
      .subscribe(response => {
        if(response) {
          this.reset();
        } else {
          console.log(response);
        }
      });
  }

  reset() {
    this.seoForm.reset();
  }

}
