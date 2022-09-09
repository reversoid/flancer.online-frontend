import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { SharedComponentsModule } from 'src/app/shared/shared-components.module';


@NgModule({
  declarations: [
    ProfilePageComponent,
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedComponentsModule,
  ],
})
export class ProfileModule { }
