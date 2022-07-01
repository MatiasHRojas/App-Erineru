import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.component.html',
  styleUrls: ['./notificaciones.component.scss'],
})
export class NotificacionesComponent implements OnInit {

  constructor( private navCtrl: NavController) {
  }

  ngOnInit() {}

  goBack(){
    this.navCtrl.back();
  }

}
