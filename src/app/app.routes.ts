import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestTreeComponent } from './modules/testtree/testtree.component';
import { AnalyticsComponent } from './modules/analytics/analytics.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: '/analytics', pathMatch: 'full' },
      { path: 'sidenav/treeview', component: TestTreeComponent },
      { path: 'analytics', component: AnalyticsComponent} 
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule { }

