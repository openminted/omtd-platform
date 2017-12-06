/**
 * Created by stefania on 7/6/17.
 */
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { ModalModule } from 'ngx-bootstrap';

import { ResourceService } from "../../services/resource.service";
import { userSpaceRouting } from "./user-space.routing";
import { MyCorporaComponent } from "./corpora/my-corpora.component";
import { MyServicesComponent } from "./components/my-services.component";
import { ConfirmationDialogComponent } from "../../shared/confirmation-dialog.component";
import { ReusableComponentsModule } from "../../shared/reusablecomponents/reusable-components.module";
import { MyOperationsComponent } from "./operations/my-operations.component";

@NgModule({
    imports: [
        CommonModule,
        userSpaceRouting,
        ReusableComponentsModule
    ],
    declarations: [
        MyCorporaComponent,
        MyServicesComponent,
        MyOperationsComponent,
    ],
    providers: [
        ResourceService
    ]
})

export class UserSpaceModule {}