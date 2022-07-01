import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { listaHorarios, Horario } from 'src/app/Interfaces/horarios';

@Component({
  selector: 'app-add-horarios',
  templateUrl: './add-horarios.component.html',
  styleUrls: ['./add-horarios.component.scss'],
})
export class AddHorariosComponent implements OnInit {

  showHour = false;
  constructor(private navCtrl: NavController, public toastController: ToastController) {  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Se ha añadido el horario con éxito.',
      duration: 2000,
      position: 'top',
      cssClass: "addToast",
      icon: 'checkmark',
    });
    toast.present();
  }

  async errorToast() {
    const toast = await this.toastController.create({
      message: 'Los parametros ingresados son insuficientes.',
      duration: 2000,
      position: 'top',
      cssClass: "addToast",
      icon: 'sad',
    });
    toast.present();
  }

  ngOnInit() {
    console.log(listaHorarios);
    //let num:number = this.getNewId();
    //console.log(this.getNewId());
  }

  goBack(){
    this.navCtrl.back();
  }

  viewHourToggle(){
    this.showHour = !this.showHour;
  }

  checkFormat(opt:number){
    if(opt == 1){
      let hora:any = document.getElementById("hrHora");
      if(hora.value < 0)
        hora.value = 0;
      if(hora.value > 23)
        hora.value = 23;
    }else if(opt == 2){
      let min:any = document.getElementById("hrMin");
      if(min.value < 0)
        min.value = 0;
      if(min.value > 59)
        min.value = 59;
    }else if(opt == 3){
      let hora:any = document.getElementById("hrHoraFin");
      if(hora.value < 0)
        hora.value = 0;
      if(hora.value > 23)
        hora.value = 23;
    }else if(opt == 4){
      let min:any = document.getElementById("hrMinFin");
      if(min.value < 0)
        min.value = 0;
      if(min.value > 59)
        min.value = 59;
    }
  }

  getNewId():number{
    let id:number = 1;
    while(1){
      if(!this.founded(id))
        return id;
      else
        id = id + 1;
    }
  }

  founded(id:number):boolean{
    for(let i=0; i<listaHorarios.length; i++)
    if(listaHorarios[i].id == id)
    return true;  
    return false;
  }

  enviarDatos(){

    let horario:Horario = {
      id:Number(this.getNewId()),
      nombre:'',
      variantes:'',
      descripcion:'',
      hora:'',
    }

    let horaini, horafin:string;
    let name:any = document.getElementById("addHrNombre");
    let vrn:any = document.getElementById("addHrVariante");
    let dsc:any = document.getElementById("addHrDescr");

    let hra:any = document.getElementById("hrHora");
    let min:any = document.getElementById("hrMin");
    let hrafin:any = document.getElementById("hrHoraFin");
    let minfin:any = document.getElementById("hrMinFin");

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
          }
        } else {
          horario.hora = horaini;
        }
      } else {
        horario.hora = horaini;
      }
      console.log(horario.hora);

      listaHorarios.push(horario);
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

}