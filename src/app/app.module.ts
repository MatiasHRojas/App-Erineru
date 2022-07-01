import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { EstadisticasComponent } from './Components/MenuLateral/estadisticas/estadisticas.component';
import { CanjearPuntosComponent } from './Components/MenuLateral/canjear-puntos/canjear-puntos.component';
import { WidgetsComponent } from './Components/MenuLateral/widgets/widgets.component';
import { AparienciaComponent } from './Components/MenuLateral/Preferencias/apariencia/apariencia.component';
import { RecientesComponent } from './Components/recientes/recientes.component';
import { ComentariosComponent } from './Components/MenuLateral/comentarios/comentarios.component';
import { AcercaDeComponent } from './Components/MenuLateral/acerca-de/acerca-de.component';
import { ActualizarProComponent } from './Components/MenuLateral/actualizar-pro/actualizar-pro.component';
import { HorariosLugaresComponent } from './Components/MenuLateral/HorariosLugares/horarios-lugares/horarios-lugares.component';
import { PreferenciasComponent } from './Components/MenuLateral/Preferencias/preferencias/preferencias.component';
import { PerfilComponent } from './Components/perfil/perfil.component';
import { enterAnimation2 } from './Animations/nav-animations';
import { NotificacionesComponent } from './Components/MenuLateral/Preferencias/notificaciones/notificaciones.component';
import { NodispComponent } from './Components/nodisp/nodisp.component';
import { AddRecComponent } from './Components/Agregar/add-rec/add-rec.component';
import { AddIdeaComponent } from './Components/Agregar/add-idea/add-idea.component';
import { AddAmComponent } from './Components/Agregar/add-am/add-am.component';
import { AddNotaComponent } from './Components/Agregar/add-nota/add-nota.component';
import { ListRecComponent } from './Components/Listas/list-rec/list-rec.component';
import { ListIdeaComponent } from './Components/Listas/list-idea/list-idea.component';
import { ListAmComponent } from './Components/Listas/list-am/list-am.component';
import { ListNotaComponent } from './Components/Listas/list-nota/list-nota.component';
import { EditRecComponent } from './Components/Editar/edit-rec/edit-rec.component';
import { EditIdeaComponent } from './Components/Editar/edit-idea/edit-idea.component';
import { EditAmComponent } from './Components/Editar/edit-am/edit-am.component';
import { EditNotaComponent } from './Components/Editar/edit-nota/edit-nota.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddHorariosComponent } from './Components/MenuLateral/HorariosLugares/Agregar/add-horarios/add-horarios.component';
import { AddLugaresComponent } from './Components/MenuLateral/HorariosLugares/Agregar/add-lugares/add-lugares.component';
import { EditHorariosComponent } from './Components/MenuLateral/HorariosLugares/Editar/edit-horarios/edit-horarios.component';
import { EditLugaresComponent } from './Components/MenuLateral/HorariosLugares/Editar/edit-lugares/edit-lugares.component';

@NgModule({
  declarations: [
    AppComponent,
    RecientesComponent,

    ActualizarProComponent,
    HorariosLugaresComponent,
      AddHorariosComponent,
      AddLugaresComponent,
      EditHorariosComponent,
      EditLugaresComponent,
    EstadisticasComponent,
    CanjearPuntosComponent,
    PreferenciasComponent,
      AparienciaComponent,
      NotificacionesComponent,
    WidgetsComponent,
    ComentariosComponent,
    AcercaDeComponent,

    PerfilComponent,

    AddRecComponent,
    AddIdeaComponent,
    AddAmComponent,
    AddNotaComponent,

    ListRecComponent,
    ListIdeaComponent,
    ListAmComponent,
    ListNotaComponent,

    EditRecComponent,
    EditIdeaComponent,
    EditAmComponent,
    EditNotaComponent,

    NodispComponent,
  ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot({
    hardwareBackButton: true,
    navAnimation: enterAnimation2,
  }), AppRoutingModule, NgbModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
