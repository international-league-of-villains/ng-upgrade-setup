import { NgModule }              from '@angular/core';
import { RouterModule, Routes, UrlHandlingStrategy }  from '@angular/router';

const appRoutes: Routes = []

export class CustomHandlingStrategy implements UrlHandlingStrategy {
  //Change the value passed to the startsWith method to catch routes
  shouldProcessUrl(url) { return url.toString().startsWith("/") || url.toString() === "/"; }
  extract(url) { return url; }
  merge(url, whole) { return url; }
}

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [
    { provide: UrlHandlingStrategy, useClass: CustomHandlingStrategy }
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}