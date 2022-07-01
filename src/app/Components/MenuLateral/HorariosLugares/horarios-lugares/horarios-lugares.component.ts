import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { listaHorarios, listaLugares } from 'src/app/Interfaces/horarios';

@Component({
  selector: 'app-horarios-lugares',
  templateUrl: './horarios-lugares.component.html',
  styleUrls: ['./horarios-lugares.component.scss'],
})
export class HorariosLugaresComponent implements OnInit {

  horarios = listaHorarios;
  lugares = listaLugares;
  constructor( private navCtrl: NavController, public toastController: ToastController) { }

  ngOnInit() {}

  async deleteHorarioToast() {
    const toast = await this.toastController.create({
      message: 'Se ha eliminado el horario con éxito.',
      duration: 2000,
      position: 'top',
      cssClass: "addToast",
      icon: 'trash',
    });
    toast.present();
  }

  async deleteLugarToast() {
    const toast = await this.toastController.create({
      message: 'Se ha eliminado el lugar con éxito.',
      duration: 2000,
      position: 'top',
      cssClass: "addToast",
      icon: 'trash',
    });
    toast.present();
  }

  goBack(){
    this.navCtrl.back();
  }

  eliminarHorario(id:number){
    let flag = true
    for(let i=0; i<listaHorarios.length && flag; i++)
      if(listaHorarios[i].id == id)
        for(let j=i; j<listaHorarios.length && flag; j++){
          if(j+1 !== listaHorarios.length)
          listaHorarios[j] = listaHorarios[j+1];
          else{
            listaHorarios.pop();
            flag = false;
          }
        }
    this.deleteHorarioToast();
  }

  eliminarLugar(id:number){
    let flag = true
    for(let i=0; i<listaLugares.length && flag; i++)
      if(listaLugares[i].id == id)
        for(let j=i; j<listaLugares.length && flag; j++){
          if(j+1 !== listaLugares.length)
          listaLugares[j] = listaLugares[j+1];
          else{
            listaLugares.pop();
            flag = false;
          }
        }
    this.deleteLugarToast();
  }

}
