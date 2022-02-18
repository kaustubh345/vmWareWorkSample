import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IFormData } from '../shared/model/formData.interface';
import { SharedDataService } from '../shared/services/shared-data.service';

@Component({
  selector: 'app-data-collect',
  templateUrl: './data-collect.component.html',
  styleUrls: ['./data-collect.component.scss'],
})
export class DataCollectComponent implements OnInit {
  field1Value:string = '';
  field2Value:string = '';

  @ViewChild('form') form: NgForm;
  constructor(
    private _router: Router,
    private _sharedDataSvc: SharedDataService
  ) { }

  ngOnInit(): void {
  }

  submitForm(form: NgForm): void {
    console.log(form);
    const formValue: IFormData = {
      field1: form.controls['field1'],
      field2: form.controls['field2']
    }
    this._sharedDataSvc.sharedFormData = formValue
    this._router.navigate(['data-display'])
  }
}
