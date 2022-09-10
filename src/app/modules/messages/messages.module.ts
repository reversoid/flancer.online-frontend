import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagesRoutingModule } from './messages-routing.module';
import { MessagesPageComponent } from './pages/messages-page/messages-page.component';
import { SingleDialogPageComponent } from './pages/single-dialog-page/single-dialog-page.component';
import { MessageComponent } from './components/message/message.component';
import { SharedComponentsModule } from 'src/app/shared/shared-components.module';


@NgModule({
  declarations: [
    MessagesPageComponent,
    SingleDialogPageComponent,
    MessageComponent,
  ],
  imports: [
    CommonModule,
    MessagesRoutingModule,
    SharedComponentsModule,
  ],
})
export class MessagesModule { }
