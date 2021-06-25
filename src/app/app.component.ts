import {ChangeDetectorRef, Component} from '@angular/core';
import {timer} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public cdr: ChangeDetectorRef) {
    this.generateDisplayableRows();
  }

  title = 'sudoku';
  timersTime = 0;
  rows: any = [];

  generateDisplayableRows() {
    for (let i = 0; i < 9; i++) {
      const row = [];
      this.rows.push(row);
      for (let j = 0; j < 9; j++) {
        row.push( new Element(j.toString(), false));
      }
    }
  }

  startGame($event: MouseEvent) {
    const source = timer(1000, 1000);
    const subscribe = source.subscribe(val => {
      console.log(val);
      this.timersTime = +val * 1000;
      this.cdr.detectChanges();
    });

  }

  logger(rows: number[][]) {
    console.log(this.rows);
  }

  logger2(elem: any) {
    console.log(elem);
  }
}

export class Element{
  value: string;
  shouldBeDisplayed: boolean;
  constructor(value: string, shouldBeDisplayed: boolean) {
    this.value = value;
    this.shouldBeDisplayed = shouldBeDisplayed;
  }
}
