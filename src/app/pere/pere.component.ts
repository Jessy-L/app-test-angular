import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pere',
  templateUrl: './pere.component.html',
  styleUrls: ['./pere.component.scss']
})
export class PereComponent implements OnInit {

  data = "Je suis la data"

  constructor() { }

  ngOnInit(): void {
  }

  processReq(message : any){

    alert(message);

  }

}
