import { Component } from '@angular/core';
import { General, listaGeneral, Recordatorios, Ideas, Notas, Ayudas } from './Interfaces/recordatorios';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor( ) {
    for(let i=0; i<Recordatorios.length; i++){
      let gen:General = {
        tipo:'rec',
        obj:Recordatorios[i],
      };
      listaGeneral.push(gen);
    }
    for(let i=0; i<Ideas.length; i++){
      let gen:General = {
        tipo:'idea',
        obj:Ideas[i],
      };
      listaGeneral.push(gen);
    }

    for(let i=0; i<Ayudas.length; i++){
      let gen:General = {
        tipo:'am',
        obj:Ayudas[i],
      };
      listaGeneral.push(gen);
    }
    
    for(let i=0; i<Notas.length; i++){
      let gen:General = {
        tipo:'nota',
        obj:Notas[i],
      };
      listaGeneral.push(gen);
    }
   
    
    
    
  }
}
