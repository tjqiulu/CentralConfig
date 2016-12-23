"use strict";
var router_1 = require('@angular/router');
// import { CampaignNewComponent }  from './campaign-new.component';
var parameters_container_component_1 = require('./parameters-container.component');
// import { CampaignEditComponent} from './campaign-edit.component';
var parametersRoutes = [
    { path: 'parameters', component: parameters_container_component_1.ParametersContainerComponent },
];
exports.ParametersRouting = router_1.RouterModule.forChild(parametersRoutes);
//# sourceMappingURL=parameters.routing.js.map