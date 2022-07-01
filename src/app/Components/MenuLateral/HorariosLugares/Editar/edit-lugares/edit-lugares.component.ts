import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { listaLugares, Lugar } from 'src/app/Interfaces/horarios';

@Component({
  selector: 'app-edit-lugares',
  templateUrl: './edit-lugares.component.html',
  styleUrls: ['./edit-lugares.component.scss'],
})
export class EditLugaresComponent implements OnInit {

  id:number = 0;
  lugar:Lugar;
  
  constructor(private ruta:ActivatedRoute, private navCtrl: NavController, public toastController: ToastController) {
    this.ruta.params.subscribe(datos=>{
      this.id = datos["id"];
    })
  }

  ngOnInit(){
    this.lugar=listaLugares.find(obj=>obj.id==this.id)
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Se ha editado el lugar con éxito.',
      duration: 2000,
      position: 'top',
      cssClass: "addToast",
      icon: 'checkmark',
    });
    toast.present();
  }

  async errorToast() {
    const toast = await this.toastController.create({
      message: 'Los parametros "Nombre" y "Dirección" son obligatorios.',
      duration: 2000,
      position: 'top',
      cssClass: "addToast",
      icon: 'alert-circle',
    });
    toast.present();
  }

  goBack(){
    this.navCtrl.back();
  }

  enviarDatos(){
    let name:any = document.getElementById("editLgNombre");
    let vrn:any = document.getElementById("editLgVariante");
    let dir:any = document.getElementById("editLgDescr");
    let lugar:Lugar = {
      id:this.id,
      nombre:'',
      variantes:'',
      direccion:'',
    }

    if((name != null && dir != null) && (name.value != '' && dir.value != '')){
      lugar.nombre = name.value;
      lugar.direccion = dir.value;

      if(vrn != null && vrn.value != '')
      lugar.variantes = vrn.value;

      this.reemplazar(lugar);
      this.presentToast();
      this.goBack();
    } else {
      this.errorToast();
    }
  }

  reemplazar(nuevo:Lugar){
    let flag = true;
    for(let i=0;i<listaLugares.length && flag; i++){
      if(listaLugares[i].id == this.id){
        listaLugares[i] = nuevo;
        flag = false;
      }
    }
  }

}