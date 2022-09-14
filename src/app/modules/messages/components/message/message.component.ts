import { Component, Input } from '@angular/core';
import { Dialog } from '../../utils/types';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent {
  @Input() dialog!: Dialog;
}
