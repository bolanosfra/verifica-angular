import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secondo',
  templateUrl: './secondo.component.html',
  styleUrls: ['./secondo.component.css']
})
export class SecondoComponent implements OnInit {
     burzum : string ;
  constructor() {
    this.burzum = "secondo"
   }

  ngOnInit(): void {
  }

}
