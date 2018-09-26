import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private _renderer2: Renderer2) { }

  ngOnInit() {
    let s = this._renderer2.createElement('script');
    s.type = `IN/CompanyProfile`;
    s.setAttribute('data-id', '18403388');
    s.setAttribute('data-format', 'hover');
    s.setAttribute('data-related', 'false');
    s.setAttribute('data-text', 'Shelley Software Development');
    var elementRef = document.getElementById("linkedinBtn");
    elementRef.appendChild(s);
  }

}
