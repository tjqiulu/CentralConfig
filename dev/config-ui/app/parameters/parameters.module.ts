import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComponentModule } from './../components/components.module';

import { ParametersTitleComponent } from './parameters-title.component';
import { ParametersViewComponent } from './parameters-view.component';
// import { ParametersListComponent } from './parameters-list.component';


import { ParametersContainerComponent } from './parameters-container.component';
// import { ParameterNewComponent } from './parameter-new.component';
// import { ParameterEditComponent } from './parameter-edit.component';

import { ParametersRouting } from './parameters.routing';

import { ParameterService } from './parameter.service';

import { CommaSeparatedNumberPipe } from '../components/number.separator';

//import { CarouselModule } from 'ng2-bootstrap/ng2-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ParametersRouting,
    ComponentModule
  ],
  declarations: [
    
    // CampaignNewComponent,
    // CampaignEditComponent,
    ParametersTitleComponent,
    ParametersContainerComponent,
    ParametersViewComponent,
    CommaSeparatedNumberPipe
  ],
  providers: [
    ParameterService
  ]

})
export class ParameterModule { }
