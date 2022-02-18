import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data-collect',
  templateUrl: './data-collect.component.html',
  styleUrls: ['./data-collect.component.scss']
})
export class DataCollectComponent implements OnInit {

  constructor(
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  submitForm(form: NgForm): void {
    console.log(form);
    this._router.navigate(['data-display'])
  }


}
