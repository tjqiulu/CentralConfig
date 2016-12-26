import { Component, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Parameter, Parameters } from './parameter';
import { ParameterService } from './parameter.service';
import { Slide } from './parameters-title.component';

import { AppService } from './../app.service';
import { PageInfo, Link } from './../app.model';
import { ModalComponent } from './../components/modal.component';

@Component({
  selector: 'parameters-view',
  templateUrl: 'app/parameters/parameters-view.component.html'
})
export class ParametersViewComponent {

  parameter: Parameter;
  error: any;
  ifSearch: boolean = false;
  parameters: Parameter[];
  parametersAdd: Parameter[] = [];
  // ifEdit:boolean=false;
  parameterBeforeEdit: Parameter;
  refreshing: boolean;
  parametersSearch: Parameter[];
  ifSuccess:boolean = false;
  // parametersSearch:string[];
  // slides: Slide[];


  // @Input() parameters:Parameters;
  constructor(private router: Router,
    private parameterService: ParameterService,

    private appService: AppService) {

  }

  ngOnInit() {

    // this.parameter = new Parameter();
    // console.debug("init CampaignCardComponent campaignId:" );
    this.parametersSearch = [];
    // this.parameter = new Parameter();
    this.parameterService.getAllParameters().then(datas => {
      //  this.setSlides(datas);
      datas.forEach((data) => {

        this.parameters.push(data);

      })
      // console.log(this.parameters);
    })
      .catch(error => {
        console.error(error);
        //  this._appService.modalError.open("Failed to get campaigns ",error);
      });
    //  this.parameters = this.parametersSearch;
    //  this.setSlides(this.parametersSearch);

  }


  // details()
  // {
  //   this.router.navigate(['/campaign', this.campaign.id] );
  // }

  search(key: string) {
    this.ifSearch = true;
    this.parametersSearch = [];
    if (key && (key.indexOf(".yml") > 0)) {
      key = key.slice(0, key.indexOf('.yml'));
    }
    if (key && (key.indexOf(".json") > 0)) {
      key = key.slice(0, key.indexOf('.json'));
    }
    if (key && (key.indexOf(".properties") > 0)) {
      key = key.slice(0, key.indexOf('.properties'));
    }
    //console.debug(key);
    this.parameterService.getParameters(key).then(datas => {

      // console.log(datas);
      datas.forEach((data) => {
        this.parametersSearch.push(data);
      })


    }).catch(error => {
      console.error(error);
    })
    this.ifSearch = false;
  }

  redirectToEditParameter(key: string) {
    // let baseHref:string = "https://github.com/ConfigurationCenterInCloud/CentralConfig/edit/master/config-repo/";
    let baseHref: string = "https://github.com/ConfigurationCenterInCloud/CentralConfig/tree/master/config-repo/";
    key = key.trim();
    // window.open()
    if (key) {
      if (key.indexOf(".yml") > 0) {
        key = key.slice(0,key.indexOf('.yml'));
      } else if (key.indexOf(".json") > 0) {
        key = key.slice(0, key.indexOf('.json'));
      } else if (key.indexOf(".properties") > 0) {
        key = key.slice(0, key.indexOf('.properties'));
      }
      window.open(baseHref + key +".yml");

    } else {

      window.location.href = baseHref;
    }
  }

  addParameter() {
    this.parametersAdd.push(new Parameter());
  }

  removeParameter(parameter: Parameter) {
    var index = this.parametersAdd.indexOf(parameter);
    this.parametersAdd.splice(index, 1);
  }

  add(parameter: Parameter) {
    this.parameters.push(parameter);
    this.parametersAdd = [];
  }

  delete(parameter: Parameter): void {
    var index = this.parameters.indexOf(parameter);
    this.parameters.splice(index, 1);
    // this.parameterService.delete(parameter)
    //  .then(parameter => {
    //    this.paramter=campaign;
    //    this.appService.modalConfirm.close();})
    //    .catch(error => {
    //      this.appService.modalConfirm.close();
    //       this.appService.modalError.open("Failed to pause " +this.campaign.name,error);
    //    })
    this.appService.modalConfirm.close();
  }

  confirmDelete(parameter: Parameter) {
    console.debug(parameter.key);
    event.stopPropagation();
    this.appService.modalConfirm.confirm("Delete", parameter.key, "Are you sure you want to <span class='action'>delete</span> the parameter?", () => this.delete(parameter));

  }

  edit(parameter: Parameter) {
    // this.parameter = new Parameter();
    parameter.ifEdit = true;
    this.parameterBeforeEdit = parameter;
    // this.parameter = parameter;

  }

  undo(paramter: Parameter) {
    paramter.ifEdit = false;
  }

  update(parameter: Parameter) {
    var index = this.parameters.indexOf(this.parameterBeforeEdit);
    this.parameters.splice(index, 1);
    this.parameters.push(parameter);
    parameter.ifEdit = false;
  }

  refresh(key:string) {
    // this.refreshing = true;
    this.parameterService.refresh(key);
    // console.log("testtest");
    this.ifSuccess = true;
     setTimeout(() => this.ifSuccess = false, 1000);
   
  }


}


