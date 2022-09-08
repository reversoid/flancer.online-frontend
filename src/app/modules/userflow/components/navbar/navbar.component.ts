import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
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

  constructor(private router: Router, private changeDetector: ChangeDetectorRef) {}

  public buttonStyles = {
    orders: '',
    messages: '',
  };

  public messagesButtonStyles = '';

  private _setButtonStyles(currentPath: string) {    
    if (currentPath === '/orders') {
      this.buttonStyles = {
        messages: TabStyle.INACTIVE,
        orders: TabStyle.ACTIVE,
      };
      
    } else if (currentPath === '/messages') {
      this.buttonStyles = {
        messages: TabStyle.ACTIVE,
        orders: TabStyle.INACTIVE,
      };
      this.changeDetector.markForCheck();
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
