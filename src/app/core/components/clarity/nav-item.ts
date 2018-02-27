import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar-item',
  template: `
    <a [routerLink]="routerLink" (click)="navigate.emit()" class="nav-link">
      <span class="nav-text">{{label}}</span>
      <ng-content></ng-content>
    </a>
  `
})
export class NavbarItemComponent {
  @Input() icon = '';
  @Input() hint = '';
  @Input() label = '';
  @Input() routerLink: string | any[] = '/';
  @Output() navigate = new EventEmitter();
}
