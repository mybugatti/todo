import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bonjour!';
  canSave;
  isUnchanged;
  isSpecial;
  date;
  today;

  constructor() {
    this.date = new Date();
    this.today = Date.now();
    //console.log("date=>", this.date);
    //console.log("now=>", this.today)
  }

  setStyles() {
    let styles = { // CSS property names
      'font-style': this.canSave
        ? 'italic' : 'normal', // italic
      'font-weight': !this.isUnchanged ? 'bold' : 'normal', // normal
      'font-size': this.isSpecial ? '24px' : '28px', // 24px
    };
    return styles;
  }

  toggle = false;
  get leFormat(): string {
    console.log(this.toggle);
    return this.toggle ? 'dd/MM/yyyy' : 'fullDate';
  }
  toggleFormat() {
    this.toggle = !this.toggle;
  }

}


