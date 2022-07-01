import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { Recordatorio, General, listaGeneral } from 'src/app/Interfaces/recordatorios';
import { listaHorarios, listaLugares } from 'src/app/Interfaces/horarios';

@Component({
  selector: 'app-edit-rec',
  templateUrl: './edit-rec.component.html',
  styleUrls: ['./edit-rec.component.scss'],
})
export class EditRecComponent implements OnInit {
  
  id:number = 0;
  rec:Recordatorio;
  listaHorario = listaHorarios;
  listaLugar = listaLugares;
  showDate = true;
  showHour = true;

  constructor(private ruta:ActivatedRoute, private navCtrl: NavController, public toastController: ToastController) {
    this.ruta.params.subscribe(datos=>{
      this.id = datos["id"];
    })
  }
  
  async editToast() {
    const toast = await this.toastController.create({
      message: 'Se ha editado el recordatorio con éxito.',
      duration: 2000,
      position: 'top',
      cssClass: "addToast",
      icon: 'pencil',
    });
    toast.present();
  }

  async deleteToast() {
    const toast = await this.toastController.create({
      message: 'Se ha eliminado el recordatorio con éxito.',
      duration: 2000,
      position: 'top',
      cssClass: "addToast",
      icon: 'trash',
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
    this.rec = this.getRec();
  }

  /* Obtener recordatorio del arreglo general */
  getRec():Recordatorio{
    for(let i=0;i<listaGeneral.length; i++)
    if(listaGeneral[i].tipo == 'rec')
    if(listaGeneral[i].obj.id == this.id)
    return listaGeneral[i].obj;
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
      let dia:any = document.getElementById("editRecDia");
      if(dia.value.length>2 || dia.value < 1 || dia.value > 31)
        dia.value = 1;
    } else if(opt == 2){
      let mes:any = document.getElementById("editRecMes");
      if(mes.value.length>2 || mes.value < 1 || mes.value > 12)
        mes.value = 1;
    } else if(opt == 3){
      let year:any = document.getElementById("editRecYear");
      if(year.value.length>4 || year.value < 2022 || year.value > 3000)
        year.value = 2022;
    }else if(opt == 4){
      let hora:any = document.getElementById("editRecHora");
      if(hora.value.length>2 || hora.value < 0 || hora.value > 23)
        hora.value = 0;
    }else if(opt == 5){
      let min:any = document.getElementById("editRecMinuto");
      if(min.value.length>2 || min.value < 0 || min.value > 59)
        min.value = 0;
    }
  }

  /* Limpiar input importancia */
  cleanImportancia(){
    let imp:any = document.getElementById("editRecImpSelect");
    if(imp!=null) imp.value = '';
  }

  /* Limpiar input ubicación */
  cleanUbicacion(){
    let ubic:any = document.getElementById("editRecUbicSelect");
    if(ubic!=null) ubic.value = '';
  }

  /* Obtener datos de los inputs, validarlos y agregar recordatorio */
  enviarDatos(){
    let asunto:any = document.getElementById("editRecAsunto");
    let descr:any = document.getElementById("editRecDescr");
    let imp:any = document.getElementById("editRecImpSelect");
    let dia:any = document.getElementById("editRecDia");
    let mes:any = document.getElementById("editRecMes");
    let year:any = document.getElementById("editRecYear");
    let hora:any = document.getElementById("editRecHora");
    let minuto:any = document.getElementById("editRecMinuto");
    let ubic:any = document.getElementById("editRecUbicSelect");

    let rec:Recordatorio = { // Nuevo recordatorio
      id:Number(this.id),
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
      
      this.eliminar(); // Eliminar el recordatorio antiguo
      listaGeneral.unshift(gen); // Agregar el nuevo recordatorio al inicio del array
      this.editToast(); // Mensaje Procedimiento Existoso

      this.goBack();
    } else {
      this.errorToast(); // Mensaje Error
    }
  }

  /* Elimina el recordatorio actual y se devuelve */
  optEliminar(){
    this.eliminar();
    this.deleteToast(); // Mensaje Eliminado Exitoso
    this.goBack();
  }

  /* Elimina el recordatorio actual */
  eliminar(){
    let flag = true
    for(let i=0; i<listaGeneral.length && flag; i++)
      if(listaGeneral[i].tipo == 'rec' && listaGeneral[i].obj.id == this.id)
        for(let j=i; j<listaGeneral.length && flag; j++){
          if(j+1 !== listaGeneral.length)
            listaGeneral[j] = listaGeneral[j+1];
          else{
            listaGeneral.pop();
            flag = false;
          }
        }
  }
}