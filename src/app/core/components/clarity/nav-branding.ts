import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar-branding',
  template: `
    <div class="branding">
      <a class="logo-and-title">
        <img [src]="image" [width]="width" [height]="height" class="d-inline-block align-bottom" alt="">
        <span class="title">{{title}}</span>
      </a>
    </div>
  `
})
export class NavbarBrandingComponent {
  @Input() image = "";
  @Input() width = 30;
  @Input() height = 30;
  @Input() title = ""
}


