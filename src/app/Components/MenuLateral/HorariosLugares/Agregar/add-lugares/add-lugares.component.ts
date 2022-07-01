import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { listaLugares, Lugar } from 'src/app/Interfaces/horarios';

@Component({
  selector: 'app-add-lugares',
  templateUrl: './add-lugares.component.html',
  styleUrls: ['./add-lugares.component.scss'],
})
export class AddLugaresComponent implements OnInit {

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
    console.log(listaLugares);
  }

  goBack(){
    this.navCtrl.back();
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
    for(let i=0; i<listaLugares.length; i++)
    if(listaLugares[i].id == id)
    return true;  
    return false;
  }

  enviarDatos(){
    let name:any = document.getElementById("addLgNombre");
    let vrn:any = document.getElementById("addLgVariante");
    let dir:any = document.getElementById("addLgDescr");
    let lugar:Lugar = {
      id:Number(this.getNewId()),
      nombre:'',
      variantes:'',
      direccion:'',
    }

    if((name != null && dir != null) && (name.value != '' && dir.value != '')){
      lugar.nombre = name.value;
      lugar.direccion = dir.value;

      if(vrn != null && vrn.value != '')
      lugar.variantes = vrn.value;

      listaLugares.push(lugar);
      this.presentToast();
      this.goBack();
    } else {
      this.errorToast();
    }
  }
}