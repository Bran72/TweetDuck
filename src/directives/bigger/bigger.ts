import { Directive } from '@angular/core';

/**
 * Generated class for the BiggerDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[bigger]' // Attribute selector
})
export class BiggerDirective {

  constructor() {
    Element.nativeElement.style.fontSize = '2em';
  }

}
