import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-preferencias',
  templateUrl: './preferencias.component.html',
  styleUrls: ['./preferencias.component.scss'],
})
export class PreferenciasComponent implements OnInit {

  tamElegido:string = "Mediana";
  diaSemana:string = "Lunes";
  formatoHora:string = "24hrs";

  displayOpt1:boolean = false;
  displayOpt2:boolean = false;
  displayOpt3:boolean = false;

  constructor( private navCtrl: NavController) {
  }

  ngOnInit() {}

  goBack(){
    this.navCtrl.back();
  }

  activeDisplay(opt:number){
    switch (opt){
      case 1:
        this.displayOpt1 = true;
        this.displayOpt2 = false;
        this.displayOpt3 = false;
        break;
      case 2:
        this.displayOpt1 = false;
        this.displayOpt2 = true;
        this.displayOpt3 = false;
        break;
      case 3:
        this.displayOpt1 = false;
        this.displayOpt2 = false;
        this.displayOpt3 = true;
        break;
      default:
        break;
    } 
  }

  hideOpt(opt:number){
    switch(opt){
      case 1: 
        this.displayOpt2 = false;
        this.displayOpt3 = false;
        break;
      case 2: 
        this.displayOpt1 = false;
        this.displayOpt3 = false;
        break;
      case 3: 
        this.displayOpt1 = false;
        this.displayOpt2 = false;
        break;
      default:
        this.displayOpt1 = false;
        this.displayOpt2 = false;
        this.displayOpt3 = false;
        break;
    }
  }

}
