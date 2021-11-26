import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  burzum : string ;
  constructor() { 
    this.burzum = "app"
  }

  title = 'bolanos-fra-fila-a';
}
