import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessagesPageComponent } from './pages/messages-page/messages-page.component';
import { SingleDialogPageComponent } from './pages/single-dialog-page/single-dialog-page.component';

const routes: Routes = [
  {
    path: '',
    component: MessagesPageComponent,
  },
  {
    path: ':id',
    component: SingleDialogPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MessagesRoutingModule { }
