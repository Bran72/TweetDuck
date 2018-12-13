import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the DevisePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'devise',
})
export class DevisePipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, args) {
    switch(args){
      case "dollar": {
        let change = value * 1.15;
        let arrondi = change*1000;
        arrondi = Math.round(arrondi);
        arrondi = arrondi/1000;
        let newValue = arrondi+'$';
        return newValue;
      }
      case "euro": {
        let newValue = value+'€';
        return newValue;
      }
      case "pound": {
        let change = value * 0.87;
        let arrondi = change*1000;
        arrondi = Math.round(arrondi);
        arrondi = arrondi/1000;
        let newValue = arrondi+'£';
        return newValue;
      }
    }
  }
}
