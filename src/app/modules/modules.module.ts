import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ClarityModule } from '@clr/angular';
import { TestTreeComponent } from './testtree/testtree.component';
import { AnalyticsComponent } from './analytics/analytics.component';

const COMPONENTS = [
    TestTreeComponent,
    AnalyticsComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ClarityModule
  ],
  declarations: [
    ...COMPONENTS,
  ],
  exports: [
    ...COMPONENTS,
  ]
})
export class ModulesModule { }

