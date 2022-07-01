import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Idea, listaGeneral, General } from 'src/app/Interfaces/recordatorios';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-edit-idea',
  templateUrl: './edit-idea.component.html',
  styleUrls: ['./edit-idea.component.scss'],
})
export class EditIdeaComponent implements OnInit {

  id:number = 0;
  idea:Idea;

  constructor(private ruta:ActivatedRoute, private navCtrl: NavController, public toastController: ToastController) {
    this.ruta.params.subscribe(datos=>{
      this.id = datos["id"];
    })
  }

  ngOnInit(){
    this.idea = this.getIdea();
  }

  async editToast() {
    const toast = await this.toastController.create({
      message: 'Se ha editado la idea con éxito.',
      duration: 2000,
      position: 'top',
      cssClass: "addToast",
      icon: 'pencil',
    });
    toast.present();
  }

  async deleteToast() {
    const toast = await this.toastController.create({
      message: 'Se ha eliminado la idea con éxito.',
      duration: 2000,
      position: 'top',
      cssClass: "addToast",
      icon: 'trash',
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

  /* Devolverse */
  goBack(){
    this.navCtrl.back();
  }

  /* Obtener idea del arreglo general */
  getIdea():Idea{
    for(let i=0;i<listaGeneral.length; i++)
    if(listaGeneral[i].tipo == 'idea')
    if(listaGeneral[i].obj.id == this.id)
    return listaGeneral[i].obj;
  }

  /* Obtener datos de los inputs, validarlos y agregar idea */
  enviarDatos(){
    let titulo:any = document.getElementById("editIdeaTitulo");
    let descr:any = document.getElementById("editIdeaDescr");
    //let list:any = document.getElementById("AddIdeaLista");
    let idea:Idea = {
      id:Number(this.id),
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
      
      this.eliminar(); // Eliminar la idea antigua
      listaGeneral.unshift(gen); // Agregar la nueva idea al inicio del array
      this.editToast(); // Mensaje Procedimiento Existoso
      this.goBack();
    } else {
      this.errorToast(); // Mensaje Error
    }
  }

  /* Elimina la idea actual y se devuelve */
  optEliminar(){
    this.eliminar();
    this.deleteToast(); // Mensaje Eliminado Exitoso
    this.goBack();
  }

  /* Elimina la idea actual */
  eliminar(){
    let flag = true
    for(let i=0; i<listaGeneral.length && flag; i++)
      if(listaGeneral[i].tipo == 'idea' && listaGeneral[i].obj.id == this.id)
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