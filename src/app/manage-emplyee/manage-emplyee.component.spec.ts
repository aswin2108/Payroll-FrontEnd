import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageEmplyeeComponent } from './manage-emplyee.component';

describe('ManageEmplyeeComponent', () => {
  let component: ManageEmplyeeComponent;
  let fixture: ComponentFixture<ManageEmplyeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageEmplyeeComponent]
    });
    fixture = TestBed.createComponent(ManageEmplyeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
