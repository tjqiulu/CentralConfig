import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { AppComponent }   from './app.component';
import { AboutComponent } from './about.component';


import { ParameterModule } from './parameters/parameters.module'
import { ComponentModule } from './components/components.module'
import { routing }  from './app.routing';
import {PopoverModule} from "ng2-popover";

import { AppService} from './app.service';
import { FormsModule } from '@angular/forms';
import {LoadingIndicator} from './components/loading.indicator';



@NgModule({
  imports:      [ CommonModule,BrowserModule, routing, ParameterModule,PopoverModule,HttpModule,JsonpModule,ComponentModule, FormsModule],
  declarations: [ AppComponent, AboutComponent, LoadingIndicator],
  bootstrap:    [ AppComponent ],
  providers: [  AppService ]
})
export class AppModule { }
