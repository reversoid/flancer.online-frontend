import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleOrderPageComponent } from './single-order-page.component';

describe('SingleOrderPageComponent', () => {
  let component: SingleOrderPageComponent;
  let fixture: ComponentFixture<SingleOrderPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleOrderPageComponent ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleOrderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
