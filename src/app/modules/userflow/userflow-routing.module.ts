import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserflowComponent } from './userflow.component';

const routes: Routes = [
  {
    path: '',
    component: UserflowComponent,
    children: [
      {
        path: 'orders',
        loadChildren: () => import('src/app/modules/order/order.module').then((m) => m.OrderModule),
      },
      {
        path: 'messages',
        loadChildren: () => import('src/app/modules/messages/messages.module').then((m) => m.MessagesModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  bootstrap: [UserflowComponent],
})
export class UserflowRoutingModule {}
