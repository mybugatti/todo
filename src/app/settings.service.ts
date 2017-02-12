import { Injectable } from '@angular/core';

@Injectable()
export class SettingsService {

  useValue: string;

  constructor() { }

  getLanguage() {

    return  this.useValue= "fr-FR";
  }

}
