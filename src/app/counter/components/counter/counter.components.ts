import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<h1>Hola Counter</h1>
    <table>
    <td>
      <tr>
        <button (click)="increaseBy()" >+ 1</button>
      </tr>
  <td>
  <tr>
    <button (click)="decreaseBy()">- 1</button>
  </tr>
  </td>
    <td>
      {{ Counter }}
    </td>
    <td>
      <tr>
        <button (click)="reset()">reset</button>
      </tr>
    </td>
  </table>
  `
})

export class CounterComponent implements OnInit {
  constructor() { }

  ngOnInit() { }


  public Counter: number = 10;

  increaseBy(): void {
    this.Counter +=1;
  }

  decreaseBy(): void {
    this.Counter -=1;
  }

  reset(): void {
    this.Counter = 10;
  }


}
