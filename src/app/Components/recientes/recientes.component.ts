import { Component, OnInit, ViewChild } from '@angular/core';
import { menuController } from '@ionic/core';
import { lista } from '../../Interfaces/lista-menu';
import { Router } from '@angular/router';
import { listaGeneral, Fecha } from 'src/app/Interfaces/recordatorios';

@Component({
  selector: 'app-recientes',
  templateUrl: './recientes.component.html',
  styleUrls: ['./recientes.component.scss'],
})

export class RecientesComponent implements OnInit{

  filterOpen = false;
  addOpen = false;

  listaMenu = lista;
  fecha;

  arrayGeneral;
  arrayRecordatorios;
  arrayIdeas;
  arrayAyudaMemoria;
  arrayNotasRapidas;

  constructor(private router:Router) {
  }

  ngOnInit() {
    //this.closeMenu();
    //this.openFirst();
    this.fecha = new Date();
    this.arrayGeneral = listaGeneral;
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

  addAction(url:string){
    console.log(listaGeneral);
    this.addOpen=false;
    setTimeout(()=>{this.router.navigateByUrl('add/'+url);},100)
  }

  closeMenu() {
    menuController.enable(true, 'first');
    menuController.close('first');
  }

  openFirst() {
    menuController.enable(true, 'first');
    menuController.open('first');
  }
}
