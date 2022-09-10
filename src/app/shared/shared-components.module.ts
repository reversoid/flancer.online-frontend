import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagComponent } from '../modules/order/components/tag/tag.component';

// TODO make declarations for all other shared components
@NgModule({
  declarations: [
    TagComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    TagComponent,
  ],
})
export class SharedComponentsModule { }
