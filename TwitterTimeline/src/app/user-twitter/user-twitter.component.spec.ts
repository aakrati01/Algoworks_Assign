import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTwitterComponent } from './user-twitter.component';

describe('UserTwitterComponent', () => {
  let component: UserTwitterComponent;
  let fixture: ComponentFixture<UserTwitterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTwitterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTwitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
