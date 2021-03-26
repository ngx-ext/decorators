import { Directive } from '@angular/core';

export function AbstractClass(): (target: any) => void {
  // tslint:disable-next-line:only-arrow-functions
  return function(target: any): void {
    return Directive()(target);
  };
}
