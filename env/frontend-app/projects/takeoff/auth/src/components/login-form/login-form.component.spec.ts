import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeoffLoginFormComponent } from './login-form.component';

describe('AuthComponent', () => {
  let component: TakeoffLoginFormComponent;
  let fixture: ComponentFixture<TakeoffLoginFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TakeoffLoginFormComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeoffLoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
