import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserflowRoutingModule } from './userflow-routing.module';
import { NavbarComponent } from '../userflow/components/navbar/navbar.component';
import { UserflowComponent } from './userflow.component';

@NgModule({
  declarations: [
    NavbarComponent,
    UserflowComponent,

  ],
  imports: [
    CommonModule,
    UserflowRoutingModule,
  ],
})
export class UserflowModule { }
