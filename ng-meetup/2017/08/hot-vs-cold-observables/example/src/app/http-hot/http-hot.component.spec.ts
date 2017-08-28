import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpHotComponent } from './http-hot.component';

describe('HttpHotComponent', () => {
  let component: HttpHotComponent;
  let fixture: ComponentFixture<HttpHotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpHotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpHotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
