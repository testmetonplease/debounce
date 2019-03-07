import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'debounce';
  count = 0;
  counter() {
    this.count++;
    console.log('Clicked!');
  }
}


