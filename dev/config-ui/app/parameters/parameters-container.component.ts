import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Parameter } from './parameter';
// import { CampaignService } from './campaign.service';
import { AppService } from './../app.service';
import { PageInfo, Link } from './../app.model';

@Component({
  templateUrl: 'app/parameters/parameters-container.component.html'
})
export class ParametersContainerComponent {




  constructor(private _router: Router, 
    // private campaignService: CampaignService, 
    private _appService: AppService) {
  }



  ngOnInit() {
     let pageInfo: PageInfo = new PageInfo([new Link("", "all parameters")], "Parameters List", "Welcome & have a good day~");
    this._appService.setPageInfo(pageInfo);
  }

  

  


}
