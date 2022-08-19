import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleDialogPageComponent } from './single-dialog-page.component';

describe('SingleDialogPageComponent', () => {
  let component: SingleDialogPageComponent;
  let fixture: ComponentFixture<SingleDialogPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleDialogPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleDialogPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
