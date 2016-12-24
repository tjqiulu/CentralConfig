import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { Parameter,Parameters } from './parameter';
import { ParameterService,Filter } from './parameter.service';
import { AppService } from './../app.service';
import { PageInfo, Link } from './../app.model';


@Component({
  selector: 'parameters-title',
  templateUrl: 'app/parameters/parameters-title.component.html'
})
export class ParametersTitleComponent {

  slides: Slide[];
  parameters:Parameter[];
  parameter: Parameter;
  


  constructor(private router: Router, 
    private parameterService: ParameterService, 
    private _appService: AppService) {

  }

  ngOnInit() {

   
    let pageInfo: PageInfo = new PageInfo([new Link("", "")], "Central Config", "Warm Welcome to You");
    this._appService.setPageInfo(pageInfo);
   
    // this.parameterService.getAllParameters().then(datas =>{ datas.forEach((data)=>{
      // let parameter
      // this.parameter.key = data.key;
      // this.parameter.value = data.value;
      // console.log("this.parameter");
      // console.log(this.parameter);
      // console.log(data);
      // this.parameters.push(data);
    // })
  // })
    // .catch(error => {
    //   console.error(error);
    //     //  this._appService.modalError.open("Failed to get campaigns ",error);
    //    });

    // this.parameterService.filterChangeEvent.subscribe( a =>{
    //   // console.debug( (<Filter>a).statuses.toJSON());
    //   this.parameterService.getParameters().then(parameters => this.setSlides(parameters))
    //   .catch(error => {
    //     console.error(error);
    //     //  this._appService.modalError.open("Failed to get campaigns ",error);
    //    });
    // });
    
  //  console.log(this.parameters);
    
  }

  // onSelect(campaign: Campaign) {
  //   this.router.navigate(['/campaign', campaign.id]);

  // }

  setSlides(parameters: Parameter[]) {
    console.log(parameters);
    let slides=new Array<Slide>();
    let currentSlide:Slide;
    let id: number=0;
    
    for(let parameter of parameters)
    {
       
       if ((id%6)==0)
       {
         currentSlide=new Slide();
         currentSlide.parameters=new Array<Parameter>();
         slides.push(currentSlide);
       }

       currentSlide.parameters.push(parameter);
       id++;

    }

    this.slides=slides;
    //this.slides = _.groupBy(campaigns, function (item, i) { return Math.floor(i / 6); });

  }

  newParameter()
  {
        this.router.navigate(['/campaign/create']);
  }

}



export class Slide {

  public parameters:Parameter[];

}


