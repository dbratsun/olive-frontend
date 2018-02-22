import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { ClarityModule } from '@clr/angular';

import { AppRoutingModule } from './app.routes';
import { CoreModule } from './core/core.module';
import { ModulesModule } from './modules/modules.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule.forRoot(),
    CoreModule,
    ModulesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
