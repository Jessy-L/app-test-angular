import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss']
})
export class FirstPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'app';
  bgColor = "#C4C4C4";
  show = false;

  // Méthode qui change le status de show par son contraire si show = false alors le contraire et true
  changeStatus(){
    this.show = !this.show
  }

}
