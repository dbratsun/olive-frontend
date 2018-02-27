import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar-header',
  template: `
    <div class="header-nav" [clr-nav-level]="navLevel">
      <ng-content></ng-content>
    </div>
  `
})
export class NavbarHeaderComponent {
  @Input() visible = true;
  @Input() navLevel = 1;
}


