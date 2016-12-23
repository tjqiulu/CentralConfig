import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers, URLSearchParams, RequestOptionsArgs } from '@angular/http';

import 'rxjs/add/operator/toPromise'; import { AppService } from '../app.service'

import { Router } from '@angular/router';

import { Parameter } from './parameter';
import { ModalComponent } from './../components/modal.component';
import * as _ from 'underscore';

@Injectable()
export class ParameterService {

  private headers = new Headers({ 'Content-Type': 'application/json' });

  // error: any;
  public filter: Filter;


  constructor(private router: Router, private http: Http, private appService: AppService) {
    this.filter = new Filter();
    this.filter.value = "";
    // ["key","value"].forEach(a => this.filter.value.push(a));
  }

  getParameters(key:string){
    
    
    // let params = new URLSearchParams();
    // this.filter.value = value;
    //  params.set('filter', JSON.stringify(this.filter));

    // return this.http.get('http://localhost:8888/'+ key+'.properties')
    //   .toPromise()
    //   // .then(response => Parameter.createOne(response.json().data) as Parameter)
    //    .then(response => {
    //     //  console.log(response.json().data);
    //      Parameter.createOne(response.text())
         
    //     })

     return this.http.get('http://localhost:8888/'+ key+'.properties')
              .toPromise()
              .then(response => Parameter.createMany(response.text()) as Parameter[])
       
  }

  getAllParameters(){
    // let params = new URLSearchParams();
    // this.filter.value = value;
    //  params.set('filter', JSON.stringify(this.filter));

    return this.http.get('resources/parameters/list' )
      .toPromise()
      .then(response => Parameter.createMany(response.json().data) as Parameter[])
       
  }

  add(parameter:Parameter){

  }

  delete(parameter:Parameter){

  }

  update(parameter:Parameter){
    
  }

  refresh(key:string){
    return this.http.post('http://localhost:8888/bus/refresh', null)
              .toPromise()
              .then(response => Parameter.createMany(response.text()) as Parameter[])
  }

}
export class Filter {
  public value: string;
}