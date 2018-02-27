import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ClarityModule } from '@clr/angular';
import { NavbarComponent } from './navbar/navbar.component';
import { SubNavbarComponent } from './sub-navbar/sub-navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';

import { NavbarItemComponent } from './components/clarity/nav-item';
import { NavbarHeaderComponent } from './components/clarity/nav-header';
import { NavbarBrandingComponent } from './components/clarity/nav-branding';


export const COMPONENTS =[
  NavbarItemComponent,
  NavbarHeaderComponent,
  NavbarBrandingComponent,
  NavbarComponent,
  SubNavbarComponent,
  SidenavComponent
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ClarityModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class CoreModule { }
