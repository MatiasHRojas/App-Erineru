import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/Services/theme.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-apariencia',
  templateUrl: './apariencia.component.html',
  styleUrls: ['./apariencia.component.scss'],
})
export class AparienciaComponent implements OnInit {

  squares = [
    { text:"aaaaaaaaaaaaaaaaaaaaaa"},
    { text:"aaaaaaaaaaaaaaaaaaaaaa"},
    { text:"aaaaaaaaaaaaaaaaaaaaaa"},
    { text:"aaaaaaaaaaaaaaaaaaaaaa"},
    { text:"aaaaaaaaaaaaaaaaaaaaaa"}]

  isLight:boolean;
  listaTemas = this.theme.getTemas();

  constructor(private theme: ThemeService, private navCtrl: NavController) {
  }

  ngOnInit() {
    this.isLight = this.theme.isLight();
    console.log(this.listaTemas);

  }

  goBack(){
    this.navCtrl.back();
  }

  setDark_th1(){
    this.theme.enableth1_Dark();
    this.isLight = false;
  }

  setLight_th1(){
    this.theme.enableth1_Light();
    this.isLight = true;
  }

  setDark_th2(){
    this.theme.enableth2_Dark();
    this.isLight = false;
  }

  setLight_th2(){
    this.theme.enableth2_Light();
    this.isLight = false;
  }

}
