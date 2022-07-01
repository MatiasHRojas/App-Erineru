import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { General, listaGeneral, NotaRapida } from 'src/app/Interfaces/recordatorios';

@Component({
  selector: 'app-add-nota',
  templateUrl: './add-nota.component.html',
  styleUrls: ['./add-nota.component.scss'],
})

export class AddNotaComponent implements OnInit {
  
  constructor( private navCtrl: NavController, public toastController: ToastController) {
  }
  
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Se ha añadido la nota con éxito.',
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
  }

  /* Devolverse */
  goBack(){
    this.navCtrl.back();
  }

  /* Generar nuevo id para la nota */
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
    if(listaGeneral[i].tipo == 'nota')
    if(listaGeneral[i].obj.id == id)
    return true;  
    return false;
  }

  /* Obtener datos de los inputs, validarlos y agregar nota */
  enviarDatos(){
    let asunto:any = document.getElementById("addNotaAsunto");
    let descr:any = document.getElementById("addNotaDescr");
    let nota:NotaRapida = { // Nueva nota
      id:Number(this.getNewId()),
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

      listaGeneral.unshift(gen); // Agregar la nueva nota al inicio del array
      this.presentToast(); // Mensaje Procedimiento Existoso
      this.goBack();
    } else {
      this.errorToast(); // Mensaje Error
    }    
  }

}