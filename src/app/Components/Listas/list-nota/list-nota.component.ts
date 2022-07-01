import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { listaGeneral, Notas } from 'src/app/Interfaces/recordatorios';

@Component({
  selector: 'app-list-nota',
  templateUrl: './list-nota.component.html',
  styleUrls: ['./list-nota.component.scss'],
})
export class ListNotaComponent implements OnInit {
  arrayGeneral;
  constructor( private navCtrl: NavController) { }

  ngOnInit() {
    this.arrayGeneral = listaGeneral;
  }

  goBack(){
    this.navCtrl.back();
  }

}
