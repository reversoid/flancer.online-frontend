import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagesRoutingModule } from './messages-routing.module';
import { MessagesPageComponent } from './pages/messages-page/messages-page.component';
import { SingleDialogPageComponent } from './pages/single-dialog-page/single-dialog-page.component';


@NgModule({
  declarations: [
    MessagesPageComponent,
    SingleDialogPageComponent,
  ],
  imports: [
    CommonModule,
    MessagesRoutingModule,
  ],
})
export class MessagesModule { }
