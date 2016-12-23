import {Component} from '@angular/core';
import {AppService} from './app.service';
import { PageInfo, Link} from './app.model';

@Component({
  template: `
      <h3>About Component</h3>
      <p>This is an Angular 2 application to demonstrate the use of the new Component Router!</p>
    `
})
export class AboutComponent {

 constructor(private _appService:AppService) {
 }

 ngOnInit() {
            
       let pageInfo:PageInfo=new PageInfo( [new Link(null,"about")], "About", "this is the about page");
       this._appService.setPageInfo(pageInfo); 
      
    }


}
