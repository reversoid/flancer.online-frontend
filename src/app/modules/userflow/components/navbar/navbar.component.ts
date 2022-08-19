import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

enum TabStyle {
  ACTIVE = 'tabs__tab btn bg-main color-dark',
  INACTIVE = 'tabs__tab btn bg-black color-light',
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  private unsubscribe = new Subject();

  constructor(private router: Router) {}

  public buttonStyles = {
    orders: '',
    messages: '',
  };

  private _setButtonStyles(currentPath: string) {
    if (currentPath === '/orders') {
      this.buttonStyles.orders = TabStyle.ACTIVE;
      this.buttonStyles.messages = TabStyle.INACTIVE;
    } else if (currentPath === '/messages') {
      this.buttonStyles.messages = TabStyle.ACTIVE;
      this.buttonStyles.orders = TabStyle.INACTIVE;
    }
  }

  ngOnInit(): void {
    this._setButtonStyles(this.router.url);

    this.router.events.pipe(takeUntil(this.unsubscribe)).subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this._setButtonStyles(event.url);
      }
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next(true);
    this.unsubscribe.complete();
  }
}
