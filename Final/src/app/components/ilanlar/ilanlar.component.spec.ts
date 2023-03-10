/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IlanlarComponent } from './ilanlar.component';

describe('IlanlarComponent', () => {
  let component: IlanlarComponent;
  let fixture: ComponentFixture<IlanlarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IlanlarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IlanlarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
