import {Injectable,EventEmitter} from '@angular/core';
import * as _ from 'underscore';
import {PageInfo} from './app.model'
import { ModalComponent } from './components/modal.component';
import { ModalErrorComponent } from './components/modalError.component';
import {Parameter} from './parameters/parameter';
import {LoadingIndicator} from './components/loading.indicator';

@Injectable()
export class AppService {
 
  event: EventEmitter<PageInfo> = new EventEmitter();
  
  public modalConfirm:ModalComponent;
  public modalError:ModalErrorComponent;
  public loadingIndicator:LoadingIndicator;


  setPageInfo(pageInfo:PageInfo)
  {
    this.event.emit(pageInfo);
  }

  // catchError(error:any, actionName:string, campaignName: string){
  //   console.log("catchError in appService");
  //   this.modalConfirm.close();
  //   this.modalError.open("Failed to " + actionName + " " + campaignName, error);
  // }

}


