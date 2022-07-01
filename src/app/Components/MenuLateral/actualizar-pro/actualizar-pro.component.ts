import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-actualizar-pro',
  templateUrl: './actualizar-pro.component.html',
  styleUrls: ['./actualizar-pro.component.scss'],
})
export class ActualizarProComponent implements OnInit {

  constructor( private navCtrl: NavController) { }

  ngOnInit() {}

  goBack(){
    this.navCtrl.back();
  }
}
