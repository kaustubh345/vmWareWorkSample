import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { DataCollectComponent } from './data-collect.component';

describe('DataCollectComponent', () => {
  let component: DataCollectComponent;
  let fixture: ComponentFixture<DataCollectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataCollectComponent ],
      providers: [{
        provide: Router, useClass: MockRouter
      }],
      imports: [FormsModule]
    })
    .compileComponents();
  });

  beforeEach(async () => {
    fixture = TestBed.createComponent(DataCollectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('field1 and form should be invalid if the it was touched but left empty', () => {
    let field1ValidationError: DebugElement;
    fixture.detectChanges(); // run change detection

    const field1 = component.form.controls['field1'];

    expect(field1.valid).toBeFalsy();
    expect(component.form.valid).toBeFalsy();

    // try to get a handle to the validation message (should exist as form is invalid):
    // field1ValidationError = fixture.debugElement.query(By.css('.required-error'));

    // // the validation error should be found:
    // expect(field1ValidationError).toBeTruthy();
  });

  it('field1 and form should be valid if the field1 was given a value', () => {
    const field1 = component.form.controls['field1'];
    field1.setValue('Kaustubh')
    expect(field1.valid).toBeTruthy();
  });

  it('field2 and form should be invalid  if the field2 was touched but left empty', () => {
    const field2 = component.form.controls['field2'];
    expect(field2.valid).toBeFalsy();
    expect(component.form.valid).toBeFalsy();
  });

  it('field2 and form should be invalid if the value in field2 is not a correct IPV4 address', () => {
    const field2 = component.form.controls['field2'];
    field2.setValue('03332323')
    expect(field2.valid).toBeFalsy();
    expect(component.form.valid).toBeFalsy();
  });

});

class MockRouter {
 
}
