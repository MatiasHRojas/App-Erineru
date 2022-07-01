import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AyudaMemoria, General, listaGeneral } from 'src/app/Interfaces/recordatorios';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-add-am',
  templateUrl: './add-am.component.html',
  styleUrls: ['./add-am.component.scss'],
})
export class AddAmComponent implements OnInit {

  nuevo:AyudaMemoria;
  preg = '...'
  resp = '...'

  constructor(private navCtrl: NavController, public toastController: ToastController) { }

  ngOnInit() {}

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Se ha añadido el Ayuda Memoria con éxito.',
      duration: 2000,
      position: 'top',
      cssClass: "addToast",
      icon: 'checkmark',
    });
    toast.present();
  }

  async alertaEnviarToast() {
    const toast = await this.toastController.create({
      message: 'Presione el botón para generar el Ayuda Memoria antes de guardar.',
      duration: 2000,
      position: 'top',
      cssClass: "addToast",
      icon: 'alert',
    });
    toast.present();
  }

  async rellenarDatosToast() {
    const toast = await this.toastController.create({
      message: 'Ingrese los datos del Ayuda Memoria.',
      duration: 2000,
      position: 'top',
      cssClass: "addToast",
      icon: 'alert',
    });
    toast.present();
  }

  /* Devolverse */
  goBack(){
    this.navCtrl.back();
  }

  /* Generar nuevo id para el AM */
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
    if(listaGeneral[i].tipo == 'am')
    if(listaGeneral[i].obj.id == id)
    return true;  
    return false;
  }

  /* Obtener datos de los inputs, validarlos y crear AM */
  crearAyuda() {
    let in_obj:any = document.getElementById("addAmObj")
    let in_clv:any = document.getElementById("addAmClave")
    let in_dto:any = document.getElementById("addAmDato")
    let in_comp:any = document.getElementById("addAmComp")

    let obj, clv, dto, comp;

    if(in_obj != null && in_clv != null && in_dto != null && in_comp != null){
      if(in_obj.value != '' && in_clv.value != '' && in_dto.value != ''){
        if(in_obj.value != ' ' && in_clv.value != ' ' && in_dto.value != ' '){
          obj = String(in_obj.value)
          clv = String(in_clv.value)
          dto = String(in_dto.value)
          comp = String(in_comp.value)
        } else{
          this.rellenarDatosToast();
          return;
        }
      } else{
        this.rellenarDatosToast();
        return;
      }
    } else{
      this.rellenarDatosToast();
      return;
    }

    let preg = '¿Que ' + clv + ' ' + obj + ' ' + comp + '?';
    this.preg = preg
    this.resp = dto

    let ayuda:AyudaMemoria = {
      id : this.getNewId(),
      objetivo : obj,
      clave : clv,
      dato : dto,
      complemento : comp,
      pregunta : preg,
      respuesta : dto
    }

    this.nuevo = ayuda
  }

  /* Agregar AM al arreglo */
  enviarDatos() {
    if (this.nuevo != null){
      let gen:General = {
        tipo:'am',
        obj:this.nuevo
      }
      listaGeneral.unshift(gen);

      console.log(listaGeneral);
      this.presentToast(); // Mensaje Procedimiento Existoso
      this.goBack();
    } else{
      this.alertaEnviarToast(); // Alerta al Enviar
    }
  }

}
