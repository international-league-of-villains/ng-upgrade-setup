import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UpgradeModule } from '@angular/upgrade/static';

import { UpgradedLegacyAppComponent } from './legacy/upgraded-legacy.app';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    UpgradedLegacyAppComponent
  ],
  imports: [
    BrowserModule,
    UpgradeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  //adding upgrade to the appModule could allow it to be ref'd
  constructor(public upgrade: UpgradeModule) {}
  ngDoBootstrap() {}
}
