import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.scss']
})
export class FilsComponent implements OnInit {

  @Input()
    filsProperty: any;

  // Event Emitter = Ecouteur d'évenement

  @Output()
    sendRequestToData : EventEmitter<any> = new EventEmitter<any>();

  // dataFils = 'Je suis la data mais du fils'

  constructor() {

  }

  ngOnInit(): void {

    console.log("[filsComponent] [RECUP DATA] => ", this.filsProperty)

  }

  // function crée par nous send event qui communique avec EventEmitter
  // pour envoyer des informations au pere ici un message au click
  sendEvent(message: any){

    this.sendRequestToData.emit(message)

  }

}
