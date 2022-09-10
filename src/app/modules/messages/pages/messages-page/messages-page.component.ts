import { Component } from '@angular/core';
import { IDialog } from '../../utils/types';

@Component({
  selector: 'app-messages-page',
  templateUrl: './messages-page.component.html',
  styleUrls: ['./messages-page.component.scss'],
})
export class MessagesPageComponent {
  public dialogs: IDialog[] = [
    {
      senderId: '5553535',
      lastMessage: `Здравствуйте! Нужен вебсайт по разработке ffffffffffffff ffffffffffff
      ffffffffffffffffffffffffffffffffffffffffffffffff fffffffffигр.. можете
      реализовать? дам 5000р`,
      lastMessageDate: Date.now(),
      newMessagesCount: 8,
      senderName: 'Олег Майями',
    },
    {
      senderId: '5553535',
      lastMessage: 'Добрый день! что насчет оплаты?',
      lastMessageDate: Date.now(),
      newMessagesCount: 0,
      senderName: 'Никита Вальерный',
    },
  ];
}
