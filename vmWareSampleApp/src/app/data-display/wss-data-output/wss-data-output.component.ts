import { Component, Input, OnInit } from '@angular/core';
import { IFormData } from 'src/app/shared/model/formData.interface';

@Component({
  selector: 'wss-data-output',
  templateUrl: './wss-data-output.component.html',
  styleUrls: ['./wss-data-output.component.scss']
})
export class WssDataOutputComponent implements OnInit {
  @Input()
  formData: IFormData;

  constructor() { }

  ngOnInit(): void {
  }
}
