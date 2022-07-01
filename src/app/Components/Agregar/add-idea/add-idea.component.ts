import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Idea, General, listaGeneral } from 'src/app/Interfaces/recordatorios';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-add-idea',
  templateUrl: './add-idea.component.html',
  styleUrls: ['./add-idea.component.scss'],
})
export class AddIdeaComponent implements OnInit {

  constructor(private navCtrl: NavController, public toastController: ToastController) {  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Se ha añadido la idea con éxito.',
      duration: 2000,
      position: 'top',
      cssClass: "addToast",
      icon: 'checkmark',
    });
    toast.present();
  }

  async errorToast() {
    const toast = await this.toastController.create({
      message: 'Debe Ingresar un Título',
      duration: 2000,
      position: 'top',
      cssClass: "addToast",
      icon: 'alert-circle',
    });
    toast.present();
  }

  ngOnInit() {
  }

  /* Devolverse */
  goBack(){
    this.navCtrl.back();
  }

  /* Generar nuevo id para la idea */
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
    if(listaGeneral[i].tipo == 'idea')
    if(listaGeneral[i].obj.id == id)
    return true;  
    return false;
  }

  /* Obtener datos de los inputs, validarlos y agregar idea */
  enviarDatos(){
    let titulo:any = document.getElementById("addIdeaTitulo");
    let descr:any = document.getElementById("addIdeaDescr");
    //let list:any = document.getElementById("addIdeaLista");
    let idea:Idea = {
      id:Number(this.getNewId()),
      titulo:'',
      descripcion:'',
    }
    let gen:General = {
      tipo: 'idea',
      obj: idea,
    }

    if(titulo!=null && titulo.value != ''){ // Si la idea tiene asunto
      idea.titulo = titulo.value;
      if(descr!=null && descr.value!= '') idea.descripcion = descr.value;
      
      listaGeneral.unshift(gen); // Agregar la nueva idea al inicio del array
      this.presentToast(); // Mensaje Procedimiento Existoso
      this.goBack();
    } else {
      this.errorToast(); // Mensaje Error
    }
  }

}


