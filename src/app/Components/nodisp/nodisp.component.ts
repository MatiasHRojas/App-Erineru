import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-nodisp',
  templateUrl: './nodisp.component.html',
  styleUrls: ['./nodisp.component.scss'],
})
export class NodispComponent implements OnInit {

  constructor( private navCtrl: NavController) {
  }

  ngOnInit() {
  }

  goBack(){
    this.navCtrl.back();
  }
}
