import { Injectable } from '@angular/core';
import { IFormData } from '../model/formData.interface';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
 sharedFormData: IFormData
  constructor() { }
}
