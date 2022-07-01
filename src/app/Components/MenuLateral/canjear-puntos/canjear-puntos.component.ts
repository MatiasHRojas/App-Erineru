import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-canjear-puntos',
  templateUrl: './canjear-puntos.component.html',
  styleUrls: ['./canjear-puntos.component.scss'],
})
export class CanjearPuntosComponent implements OnInit {

  constructor( private navCtrl: NavController) { }

  ngOnInit() {}

  goBack(){
    this.navCtrl.back();
  }
}
