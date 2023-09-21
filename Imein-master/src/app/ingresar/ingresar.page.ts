import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.page.html',
  styleUrls: ['./ingresar.page.scss'],
})
export class IngresarPage implements OnInit {

  public alertButtons = ['OK'];
  public alertInputs = [
    {
      placeholder: 'Codigo de grua',
    },    
  ];

  constructor() { }

  ngOnInit() {
  }

}
