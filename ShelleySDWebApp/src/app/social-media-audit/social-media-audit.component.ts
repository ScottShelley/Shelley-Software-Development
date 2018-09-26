import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailService } from '../services/email.service';

@Component({
  selector: 'app-social-media-audit',
  templateUrl: './social-media-audit.component.html',
  styleUrls: ['./social-media-audit.component.css']
})
export class SocialMediaAuditComponent implements OnInit {
  auditForm: FormGroup;

  constructor(private fb: FormBuilder, private service: EmailService) {
    this.auditForm = fb.group({
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
      'nature': [null, Validators.required],
      'platform': [null, Validators.required],
      'spend': [null, Validators.required],
      'agree': [null, Validators.required]
    });
  }

  ngOnInit() {
  }

  submitAudit() {
    // console.log(JSON.stringify(this.auditForm.value));
    this.service.postSocialAudit(this.auditForm.value)
      .subscribe(response => {
        if (response) {
          this.reset();
        } else {
          console.log(response);
        }
      });
  }

  reset() {
    this.auditForm.reset();
  }

}
