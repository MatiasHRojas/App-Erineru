import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AyudaMemoria, listaGeneral, General } from 'src/app/Interfaces/recordatorios';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-edit-am',
  templateUrl: './edit-am.component.html',
  styleUrls: ['./edit-am.component.scss'],
})
export class EditAmComponent implements OnInit {

  id:number = 0;
  am:AyudaMemoria;
  nuevo:AyudaMemoria;
  preg:string;
  resp:string;

  constructor(private ruta:ActivatedRoute, private navCtrl: NavController, public toastController: ToastController) {
    this.ruta.params.subscribe(datos=>{
      this.id = datos["id"];
    })
  }

  async editToast() {
    const toast = await this.toastController.create({
      message: 'Se ha editado el Ayuda Memoria con éxito.',
      duration: 2000,
      position: 'top',
      cssClass: "addToast",
      icon: 'pencil',
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

  async deleteToast() {
    const toast = await this.toastController.create({
      message: 'Se ha eliminado el Ayuda Memoria con éxito.',
      duration: 2000,
      position: 'top',
      cssClass: "addToast",
      icon: 'trash',
    });
    toast.present();
  }

  ngOnInit(){
    this.am = this.getAM();
    this.preg = this.am.pregunta;
    this.resp = this.am.respuesta;
  }
  
  /* Obtener AM del arreglo general */
  getAM():AyudaMemoria{
    for(let i=0;i<listaGeneral.length; i++)
    if(listaGeneral[i].tipo == 'am')
    if(listaGeneral[i].obj.id == this.id)
    return listaGeneral[i].obj;
  }

  /* Devolverse */
  goBack(){
    this.navCtrl.back();
  }

  /* Obtener datos de los inputs, validarlos y crear AM */
  crearAyuda() {
    let in_obj:any = document.getElementById("editAmObj")
    let in_clv:any = document.getElementById("editAmClave")
    let in_dto:any = document.getElementById("editAmDato")
    let in_comp:any = document.getElementById("editAmComp")

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
      id : Number(this.am.id),
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
  enviarDatos(){
    this.eliminar(); // Eliminar la nota antigua

    if (this.nuevo != null){
      let gen:General = {
        tipo:'am',
        obj:this.nuevo,
      }
      listaGeneral.unshift(gen); // Agregar el nuevo ayuda memoria al inicio del array

      console.log(listaGeneral);
      this.editToast(); // Mensaje Procedimiento Existoso
      this.goBack();
    } else{
      this.alertaEnviarToast(); // Alerta al Enviar
    }
  }

  /* Elimina el AM actual y se devuelve */
  optEliminar(){
    this.eliminar();
    console.log(listaGeneral);
    this.deleteToast(); // Mensaje Eliminado Exitoso
    this.goBack();
  }

  /* Elimina el AM actual */
  eliminar(){
    let flag = true
    for(let i=0; i<listaGeneral.length && flag; i++)
      if(listaGeneral[i].tipo == 'am' && listaGeneral[i].obj.id == this.id)
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