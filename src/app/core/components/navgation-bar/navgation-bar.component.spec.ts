import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavgationBarComponent } from './navgation-bar.component';

describe('NavgationBarComponent', () => {
  let component: NavgationBarComponent;
  let fixture: ComponentFixture<NavgationBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavgationBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavgationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
