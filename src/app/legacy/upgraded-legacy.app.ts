import { Directive, ElementRef, Injector, Input, Output, EventEmitter } from '@angular/core'
import { UpgradeComponent } from '@angular/upgrade/static';

@Directive({
  selector: 'legacy-app-component'
})

export class UpgradedLegacyAppComponent extends UpgradeComponent {
  @Output() callback: EventEmitter<any> = new EventEmitter();
  constructor(elementRef: ElementRef, injector: Injector) {
    super('legacyAppComponent', elementRef, injector);
  }
}