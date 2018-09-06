import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeoffAuthComponent } from './takeoff-auth.component';

describe('TakeoffAuthComponent', () => {
  let component: TakeoffAuthComponent;
  let fixture: ComponentFixture<TakeoffAuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakeoffAuthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeoffAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
