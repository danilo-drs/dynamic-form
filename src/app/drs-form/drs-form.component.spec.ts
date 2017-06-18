import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrsFormComponent } from './drs-form.component';

describe('DrsFormComponent', () => {
  let component: DrsFormComponent;
  let fixture: ComponentFixture<DrsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
