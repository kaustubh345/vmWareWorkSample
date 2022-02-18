import { IFormData } from './../shared/model/formData.interface';
import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../shared/services/shared-data.service';

@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.scss']
})
export class DataDisplayComponent implements OnInit {
  formData: IFormData;

  constructor(
    private _sharedDataSvc: SharedDataService
  ) { }

  ngOnInit(): void {
    this.formData = this._sharedDataSvc.sharedFormData;
  }

}
