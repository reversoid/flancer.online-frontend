import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagComponent } from '../modules/order/components/tag/tag.component';
import { CreatedAtPipe } from './created-at.pipe';

// TODO make declarations for all other shared components
@NgModule({
  declarations: [
    TagComponent,
    CreatedAtPipe,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    TagComponent,
    CreatedAtPipe,
  ],
})
export class SharedComponentsModule { }
