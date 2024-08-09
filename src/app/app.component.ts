
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  private defaultCounter: number = 10;
  public counter:number = this.defaultCounter;
  public title:string = 'Hello World.';


  protected increaseBy( value:number = 10 ):void {
    this.counter += value;
  }

  protected resetCounter():void {
    this.counter = this.defaultCounter;
  }
}
