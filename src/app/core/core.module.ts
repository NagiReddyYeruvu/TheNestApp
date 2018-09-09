import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';

import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
import { AuthGuardService } from './services/auth-guard.service';
import { HeaderMenuComponent } from '../shared/headermenu/headermenu.component';
import { ContactTopComponent } from '../shared/contacttop/contacttop.component';
import { ContactSectionComponent } from '../shared/contactsection/contactsection.component';
import { ContactBottomComponent } from '../shared/contactbottom/contactbottom.component';
import { ContactAddressComponent } from '../shared/contactaddress/contactaddress.component';




@NgModule({
    imports: [
        CommonModule,
        CoreRoutingModule
    ],
    declarations: [LoginComponent, HeaderComponent, HeaderMenuComponent, ContactTopComponent,
        ContactSectionComponent, ContactBottomComponent, ContactAddressComponent, NotFoundComponent],
    exports: [
        RouterModule,
        HeaderComponent,
        HeaderMenuComponent,
        ContactTopComponent,
        ContactSectionComponent,
        ContactBottomComponent,
        ContactAddressComponent,
    ],
    providers: [
        AuthenticationService,
        AuthGuardService
    ]
})
export class CoreModule { }
