import { Position } from '../position';
import { formStateTrigger, contextStateTrigger } from './animation';
import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { ContactService } from './contact.service';
import { IContact } from "./Contact.model";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [
    formStateTrigger,
    contextStateTrigger
  ]
})
export class ContactComponent implements OnInit {
	contactform: any;
	fileName: string;
  file: File;
  private componentPosition: number;
  state = 'hide';

  constructor(private fb: FormBuilder,
              private service: ContactService,
              private el: ElementRef) {
    this.contactform = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(8)]],
      subject: ['', Validators.required],
	    message: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  ngOnInit() {
    this.componentPosition = this.el.nativeElement.offsetTop - 300;
  }

  handleFile(e) {
    this.file = e.target.files;
    this.fileName = e.target.files[0].name;
  }

  send() {
	  //delete this.contactform.value['fileInput'];
	  //let formData: FormData = new FormData();
	  //formData.append('file', this.file);

	  //console.log(formData);

	  //this.contactform.value['file'] = formData;

	   // console.log(this.contactform.value);

	  this.service.PostEmail(this.contactform.value)
		  .subscribe((response) => {
			  let result = response;

			  if (result === true) {
				  alert("Successfully");
				  this.reset();
			  }
		  });
    
    
  }

  reset() {
	  this.contactform.reset();
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    

    if (Position.scrollPosition >= this.componentPosition) {
      this.state = 'show';
    }

  }

}
