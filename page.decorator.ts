import { Component } from '@angular/core';

export function Page(obj: Omit<Component, 'selector'>): (target: any) => void {
  // tslint:disable-next-line:only-arrow-functions
  return function(target: any): void {
    return Component(obj)(target);
  };
}
