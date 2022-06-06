import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.scss']
})
export class ProduitComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  bgColor = "#C4C4C4";

  changeColor(input: { value: string; }){

    this.bgColor = input.value;

  }

}
