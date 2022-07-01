import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Ayudas, listaGeneral } from 'src/app/Interfaces/recordatorios';

@Component({
  selector: 'app-list-am',
  templateUrl: './list-am.component.html',
  styleUrls: ['./list-am.component.scss'],
})
export class ListAmComponent implements OnInit {

  arrayGeneral;
  
  constructor( private navCtrl: NavController) { }

  ngOnInit() {
    this.arrayGeneral = listaGeneral;
  }

  goBack(){
    this.navCtrl.back();
  }

}
