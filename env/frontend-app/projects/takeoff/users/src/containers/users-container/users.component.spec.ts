import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeoffUsersContainerComponent } from './users.component';

describe('TakeoffUsersContainerComponent', () => {
  let component: TakeoffUsersContainerComponent;
  let fixture: ComponentFixture<TakeoffUsersContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TakeoffUsersContainerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeoffUsersContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
