import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Recordatorio, Fecha, listaGeneral } from 'src/app/Interfaces/recordatorios';

@Component({
  selector: 'app-list-rec',
  templateUrl: './list-rec.component.html',
  styleUrls: ['./list-rec.component.scss'],
})
export class ListRecComponent implements OnInit {

  fecha;
  arrayGeneral;
  flag = false;

  constructor( private navCtrl: NavController) {
  }

  ngOnInit() {
    this.fecha = new Date();
    this.arrayGeneral = listaGeneral;
  }

  goBack(){
    this.navCtrl.back();
  }

  check_Fecha_y_Hora(date: Fecha):boolean{
    let dia:string = String(this.fecha.getDate());
    let mes:string = String(this.fecha.getMonth()+1);
    let year:string = String(this.fecha.getFullYear());

    let hora:string  = String(this.fecha.getHours());
    let minutos:string  = String(this.fecha.getMinutes());

    if(dia.length < 2) dia = ('0' + dia);
    if(mes.length < 2) mes = ('0' + mes);
    if(hora.length < 2) hora = ('0' + hora);
    if(minutos.length < 2) minutos = ('0' + minutos);

    if(date.year != year) return false;
    if(date.mes != mes) return false;
    if(date.dia != dia) return false;

    //console.log(dia + '/' + mes + '/' + year + ' ' + hora + ':' + minutos);

    return true;
  }

  isToday(date: Fecha):boolean{
    if (this.check_Fecha_y_Hora(date) == true) return true;
    return false;
  }
}
