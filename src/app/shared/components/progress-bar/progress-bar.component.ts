import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
})
export class ProgressBarComponent implements OnInit {
  public isLoading = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 5000);
  }
}
