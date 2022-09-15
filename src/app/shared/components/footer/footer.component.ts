import { Component, ChangeDetectionStrategy, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

const urlWhereShowFooter: RegExp[] = [
  /messages$/,
  /profile/,
  /\/$/,
];

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent implements OnInit, OnDestroy {
  constructor(private router: Router, private changeDetector: ChangeDetectorRef) {}

  public show = false;

  private unsubscribe = new Subject<true>();

  ngOnInit(): void {
    this.router.events.pipe(takeUntil(this.unsubscribe)).subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const newValue = urlWhereShowFooter.some((url) => url.test(event.url));
        console.log(event.url, newValue);
        
        if (this.show !== newValue) {
          this.show = newValue; 
          this.changeDetector.markForCheck();
        } 
      }
    });
  }

  test() {
    console.log('rerender footer');
    return '';
    
  }

  ngOnDestroy(): void {
    this.unsubscribe.next(true);
    this.unsubscribe.complete();
  }
}
