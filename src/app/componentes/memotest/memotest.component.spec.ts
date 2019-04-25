import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemotestComponent } from './memotest.component';

describe('MemotestComponent', () => {
  let component: MemotestComponent;
  let fixture: ComponentFixture<MemotestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemotestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemotestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
