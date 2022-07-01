import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { NotaRapida, listaGeneral, General } from 'src/app/Interfaces/recordatorios';

@Component({
  selector: 'app-edit-nota',
  templateUrl: './edit-nota.component.html',
  styleUrls: ['./edit-nota.component.scss'],
})
export class EditNotaComponent implements OnInit {

  id:number = 0;
  nota:NotaRapida;

  constructor(private ruta:ActivatedRoute, private navCtrl: NavController, public toastController: ToastController) {
    this.ruta.params.subscribe(datos=>{
      this.id = datos["id"];
    })
  }

  async editToast() {
    const toast = await this.toastController.create({
      message: 'Se ha editado la nota con éxito.',
      duration: 2000,
      position: 'top',
      cssClass: "addToast",
      icon: 'pencil',
    });
    toast.present();
  }

  async deleteToast() {
    const toast = await this.toastController.create({
      message: 'Se ha eliminado la nota con éxito.',
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

  ngOnInit(){
    this.nota = this.getNota();
  }
  
  /* Obtener nota del arreglo general */
  getNota():NotaRapida{
    for(let i=0;i<listaGeneral.length; i++)
    if(listaGeneral[i].tipo == 'nota')
    if(listaGeneral[i].obj.id == this.id)
    return listaGeneral[i].obj;
  }

  /* Devolverse */
  goBack(){
    this.navCtrl.back();
  }

  /* Obtener datos de los inputs, validarlos y agregar nota */
  enviarDatos(){
    let asunto:any = document.getElementById("editNotaAsunto");
    let descr:any = document.getElementById("editNotaDescr");
    let nota:NotaRapida = { // Nueva nota
      id:Number(this.id),
      asunto:'',
      descr:'',
    }
    let gen:General = {
      tipo: 'nota',
      obj: nota,
    }

    if(asunto != null && asunto.value != ''){ // Si la nota tiene asunto
      nota.asunto = asunto.value;
      if(descr != null && descr.value != '') nota.descr = descr.value;

      this.eliminar(); // Eliminar la nota antigua
      listaGeneral.unshift(gen); // Agregar la nueva nota al inicio del array
      this.editToast(); // Mensaje Procedimiento Existoso
      this.goBack();
    } else {
      this.errorToast(); // Mensaje Error
    }    
  }

  /* Elimina la nota actual y se devuelve */
  optEliminar(){
    this.eliminar();
    this.deleteToast(); // Mensaje Eliminado Exitoso
    this.goBack();
  }

  /* Elimina la nota actual */
  eliminar(){
    let flag = true
    for(let i=0; i<listaGeneral.length && flag; i++)
      if(listaGeneral[i].tipo == 'nota' && listaGeneral[i].obj.id == this.id)
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