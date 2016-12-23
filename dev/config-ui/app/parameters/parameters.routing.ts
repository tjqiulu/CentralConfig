import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { CampaignNewComponent }  from './campaign-new.component';
import { ParametersContainerComponent} from './parameters-container.component';
// import { CampaignEditComponent} from './campaign-edit.component';

const parametersRoutes: Routes = [
  {path:'parameters', component: ParametersContainerComponent},
  // {path:'campaign/create', component: CampaignNewComponent},
  // {path:'campaign/:id', component: CampaignDetailComponent},
  // {path:'campaign/edit/:id', component: CampaignEditComponent}
];

export const ParametersRouting: ModuleWithProviders = RouterModule.forChild(parametersRoutes);
