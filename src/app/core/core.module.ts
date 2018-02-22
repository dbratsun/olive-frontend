import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ClarityModule } from '@clr/angular';
import { NavbarComponent } from './navbar/navbar.component';
import { SubNavbarComponent } from './sub-navbar/sub-navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  imports: [
    CommonModule, 
    RouterModule,
    ClarityModule
  ],
  declarations: [
    NavbarComponent,
    SubNavbarComponent,
    SidenavComponent
  ],
  exports: [
    NavbarComponent,
    SubNavbarComponent,
    SidenavComponent
  ]
})
export class CoreModule { }
