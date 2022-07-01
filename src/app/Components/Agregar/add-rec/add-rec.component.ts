import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { Recordatorio, listaGeneral, General } from 'src/app/Interfaces/recordatorios';
import { listaHorarios, listaLugares } from 'src/app/Interfaces/horarios';

@Component({
  selector: 'app-add-rec',
  templateUrl: './add-rec.component.html',
  styleUrls: ['./add-rec.component.scss'],
})

export class AddRecComponent implements OnInit {
  
  fecha;
  listaHorario = listaHorarios;
  listaLugar = listaLugares;
  showDate = false;
  showHour = false;
  
  constructor( private navCtrl: NavController, public toastController: ToastController) {
  }
  
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Se ha añadido el recordatorio con éxito.',
      duration: 2000,
      position: 'top',
      cssClass: "addToast",
      icon: 'checkmark',
    });
    toast.present();
  }

  async errorToast() {
    const toast = await this.toastController.create({
      message: 'Debe Ingresar un Asunto',
      duration: 2000,
      position: 'top',
      cssClass: "addToast",
      icon: 'alert-circle',
    });
    toast.present();
  }

  ngOnInit() {
    this.fecha = new Date();
  }

  /* Devolverse */
  goBack(){
    this.navCtrl.back();
  }

  /* Switch toggle de fecha */
  viewDateToggle(){
    this.showDate = !this.showDate
  }
  
  /* Switch toggle de hora */
  viewHourToggle(){
    this.showHour = !this.showHour
  }

  /* Manejar el formato de los inputs de fecha y hora */
  checkFormat(opt:number){
    if(opt == 1){
      let dia:any = document.getElementById("addRecDia");
      if(dia.value.length>2 || dia.value < 1 || dia.value > 31)
        dia.value = 1;
    } else if(opt == 2){
      let mes:any = document.getElementById("addRecMes");
      if(mes.value.length>2 || mes.value < 1 || mes.value > 12)
        mes.value = 1;
    } else if(opt == 3){
      let year:any = document.getElementById("addRecYear");
      if(year.value.length>4 || year.value < 2022 || year.value > 3000)
        year.value = 2022;
    }else if(opt == 4){
      let hora:any = document.getElementById("addRecHora");
      if(hora.value.length>2 || hora.value < 0 || hora.value > 23)
        hora.value = 0;
    }else if(opt == 5){
      let min:any = document.getElementById("addRecMinuto");
      if(min.value.length>2 || min.value < 0 || min.value > 59)
        min.value = 0;
    }
  }

  /* Limpiar input importancia */
  cleanHorario(){
    let hor:any = document.getElementById("addRecHorarioSelect");
    if(hor!=null) hor.value = '';
  }

  /* Limpiar input importancia */
  cleanImportancia(){
    let imp:any = document.getElementById("addRecImpSelect");
    if(imp!=null) imp.value = '';
  }

  /* Limpiar input ubicación */
  cleanUbicacion(){
    let ubic:any = document.getElementById("addRecUbicSelect");
    if(ubic!=null) ubic.value = '';
  }

  /* Generar nuevo id para el recordatorio */
  getNewId():number{
    let id:number = 1;
    while(1){
      if(!this.founded(id))
        return id;
      else
        id = id + 1;
    }
  }

  /* Encontrar id */
  founded(id:number):boolean{
    for(let i=0; i<listaGeneral.length; i++)
    if(listaGeneral[i].tipo == 'rec')
    if(listaGeneral[i].obj.id == id)
    return true;
    return false;
  }

  /* Obtener datos de los inputs, validarlos y agregar recordatorio */
  enviarDatos(){
    let asunto:any = document.getElementById("addRecAsunto");
    let descr:any = document.getElementById("addRecDescr");
    let imp:any = document.getElementById("addRecImpSelect");
    let dia:any = document.getElementById("addRecDia");
    let mes:any = document.getElementById("addRecMes");
    let year:any = document.getElementById("addRecYear");
    let hora:any = document.getElementById("addRecHora");
    let minuto:any = document.getElementById("addRecMinuto");
    let ubic:any = document.getElementById("addRecUbicSelect");

    let rec:Recordatorio = { // Nuevo recordatorio
      id:Number(this.getNewId()),
      asunto:'',
      descripcion:'',
      lugar:'',
      prioridad:'',
      fecha:{dia:'', mes:'', year:'', hora:'', minuto:''}
    }
    let gen:General = {
      tipo: 'rec',
      obj: rec,
    }

    if(asunto!=null && asunto.value != ''){  // Si el recordatorio tiene asunto
      rec.asunto = asunto.value;
      if(descr!=null && descr.value != '') rec.descripcion = descr.value;
      if(imp!=null && imp.value != '') rec.prioridad = imp.value;
      if(ubic!=null && ubic.value != '') rec.lugar = ubic.value;

      if(this.showDate){
        if(dia!=null && dia.value!='') rec.fecha.dia = String(dia.value);
        if(mes!=null && mes.value!='') rec.fecha.mes = String(mes.value);
        if(year!=null && year.value!='') rec.fecha.year = String(year.value);
      }
      if(this.showHour){
        if(hora!=null && hora.value!=null) rec.fecha.hora = String(hora.value);
        if(minuto!=null && minuto.value!=null) rec.fecha.minuto = String(minuto.value);
      }
      //else { //<- Para los horarios dinamicos
      //  let horario:any = document.getElementById("addRecHorarioSelect");
      //  if(horario!=null && horario.value != '') setHorario(horario.value,rec.fecha);
      //}
      
      listaGeneral.unshift(gen); // Agregar el nuevo recordatorio al inicio del array
      this.presentToast(); // Mensaje Procedimiento Existoso
      this.goBack();
    } else {
      this.errorToast(); // Mensaje Error
    }
  }

}