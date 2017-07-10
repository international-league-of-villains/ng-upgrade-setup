import { NgModule, Component }              from '@angular/core';
import { RouterModule, Routes, UrlHandlingStrategy }  from '@angular/router';

@Component({
  template: `<h2>Angular 4 route</h2>`
})
export class ExamplePage {}

const appRoutes: Routes = [
  { path: 'example', component: ExamplePage}
]

export class CustomHandlingStrategy implements UrlHandlingStrategy {
  //Change the value passed to the startsWith method to catch routes
  shouldProcessUrl(url) { return url.toString().startsWith("/") || url.toString() === "/"; }
  extract(url) { return url; }
  merge(url, whole) { return url; }
}

@NgModule({
  declarations: [ExamplePage],
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