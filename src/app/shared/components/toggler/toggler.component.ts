import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-toggler',
  templateUrl: './toggler.component.html',
  styleUrls: ['./toggler.component.scss'],
})
export class TogglerComponent {
  @Input() checked: boolean = false;

  @Output() toggleChange = new EventEmitter<boolean>();

  public change(target: EventTarget) {
    this.toggleChange.emit((target as HTMLInputElement).checked);
  }
}
