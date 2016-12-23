import {EventEmitter} from '@angular/core';

export class PageInfo {
 
  constructor(
    public links: Link[],
    public title:string,
    public description:string) {
        
    }
}

export class Link {

  constructor(  
  public path:string,
  public name:string ) {}
}
