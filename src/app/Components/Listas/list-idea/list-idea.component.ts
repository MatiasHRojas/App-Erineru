import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Ideas, listaGeneral } from 'src/app/Interfaces/recordatorios';

@Component({
  selector: 'app-list-idea',
  templateUrl: './list-idea.component.html',
  styleUrls: ['./list-idea.component.scss'],
})
export class ListIdeaComponent implements OnInit {
  
  arrayGeneral;
  constructor( private navCtrl: NavController) { }

  ngOnInit() {
    this.arrayGeneral = listaGeneral;
  }

  goBack(){
    this.navCtrl.back();
  }

}
