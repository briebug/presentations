import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpColdComponent } from './http-cold.component';

describe('HttpColdComponent', () => {
  let component: HttpColdComponent;
  let fixture: ComponentFixture<HttpColdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpColdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpColdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
