import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { listaHorarios, Horario } from 'src/app/Interfaces/horarios';

@Component({
  selector: 'app-edit-horarios',
  templateUrl: './edit-horarios.component.html',
  styleUrls: ['./edit-horarios.component.scss'],
})
export class EditHorariosComponent implements OnInit {

  id:number = 0;
  horario:Horario;
  showHour;
  
  constructor(private ruta:ActivatedRoute, private navCtrl: NavController, public toastController: ToastController) {
    this.ruta.params.subscribe(datos=>{
      this.id = datos["id"];
    })
  }

  ngOnInit(){
    this.horario=listaHorarios.find(obj=>obj.id==this.id)
    console.log(listaHorarios);
    if(this.horario.hora.length > 6){
      this.showHour = true;
    } else {
      this.showHour = false;
    }
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Se ha editado el horario con éxito.',
      duration: 2000,
      position: 'top',
      cssClass: "addToast",
      icon: 'checkmark',
    });
    toast.present();
  }

  async errorToast() {
    const toast = await this.toastController.create({
      message: 'Los parametros "Nombre" y "Hora" son obligatorios.',
      duration: 2000,
      position: 'top',
      cssClass: "addToast",
      icon: 'sad',
    });
    toast.present();
  }

  goBack(){
    this.navCtrl.back();
  }

  viewHourToggle(){
    this.showHour = !this.showHour;
  }

  horaValue(hora:string, tipo:number){
    if(tipo == 1){
      if(hora.length == 5){
        return hora.slice(0,-3)
      } else {
        return hora.slice(0,-11)
      }
    }else if(tipo == 2){
      if(hora.length == 5){
        return hora.slice(3)
      } else {
        return hora.slice(3,-8)
      }
    }else if(tipo == 3){
      return hora.slice(8,-3)
    }else if(tipo == 4){
      return hora.slice(11)
    }
    return 0;
  }

  checkFormat(opt:number){
    if(opt == 1){
      let hora:any = document.getElementById("edithrHora");
      if(hora.value < 0)
        hora.value = 0;
      if(hora.value > 23)
        hora.value = 23;
    }else if(opt == 2){
      let min:any = document.getElementById("edithrMin");
      if(min.value < 0)
        min.value = 0;
      if(min.value > 59)
        min.value = 59;
    }else if(opt == 3){
      let hora:any = document.getElementById("edithrHoraFin");
      if(hora.value < 0)
        hora.value = 0;
      if(hora.value > 23)
        hora.value = 23;
    }else if(opt == 4){
      let min:any = document.getElementById("edithrMinFin");
      if(min.value < 0)
        min.value = 0;
      if(min.value > 59)
        min.value = 59;
    }
  }

  getNewId():number{
    let id:number = 1;
    let flag:boolean;

    while(1){
      flag = false;
      for(let i=0; i<listaHorarios.length; i++){
        if(listaHorarios[i].id == id)
          flag = true;
        if(!flag)
          return id;
        else
          id = id+1;
      }
    }
  }

  enviarDatos(){
    let horario:Horario = {
      id:this.id,
      nombre:'',
      variantes:'',
      descripcion:'',
      hora:'',
    }

    let horaini, horafin:string;
    let name:any = document.getElementById("editHrNombre");
    let vrn:any = document.getElementById("editHrVariante");
    let dsc:any = document.getElementById("editHrDescr");

    let hra:any = document.getElementById("edithrHora");
    let min:any = document.getElementById("edithrMin");
    let hrafin:any = document.getElementById("edithrHoraFin");
    let minfin:any = document.getElementById("edithrMinFin");

    if((name != null && hra != null && min != null) &&
      (name.value != '' && hra.value != '' && min.value != '')){

      horario.nombre = name.value;
      horaini = this.getHora(hra.value,min.value);
      if(vrn != null && vrn.value != '') horario.variantes = vrn.value;
      if(dsc != null && dsc.value != '') horario.descripcion = dsc.value;

      if(this.showHour){
        if(hrafin != null && hrafin.value != ''){
          if(minfin != null && minfin.value != ''){
            horafin = this.getHora(hrafin.value, minfin.value);
            horario.hora = horaini + ' - ' + horafin;
          } else {
            horario.hora = horaini;
          }
        } else {
          horario.hora = horaini;
        }
      } else {
        horario.hora = horaini;
      }
      console.log(horario.hora);

      this.reemplazar(horario);
      this.presentToast();
      this.goBack();
    } else {
      this.errorToast();
    }
  }

  getHora(hra:number,min:number){
    let format:string;
    let hora:string = String(hra);
    let minuto:string = String(min);

    if(hora.length < 2)
      hora = '0' + hora;
    if(minuto.length < 2)
      minuto = '0' + minuto;
    if(hora.length > 2)
      hora = hora.slice(hora.length-2)
    if(minuto.length > 2)
      minuto = minuto.slice(minuto.length-2)

    format = hora + ':' + minuto;
    return format
  }

  reemplazar(nuevo:Horario){
    let flag = true;
    for(let i=0;i<listaHorarios.length && flag; i++){
      if(listaHorarios[i].id == this.id){
        listaHorarios[i] = nuevo;
        flag = false;
      }
    }
  }

}