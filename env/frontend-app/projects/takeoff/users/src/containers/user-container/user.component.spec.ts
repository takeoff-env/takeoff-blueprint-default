import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeoffUserContainerComponent } from './user.component';

describe('TakeoffUserContainerComponent', () => {
  let component: TakeoffUserContainerComponent;
  let fixture: ComponentFixture<TakeoffUserContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TakeoffUserContainerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeoffUserContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
