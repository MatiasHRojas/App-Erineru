import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NodispComponent } from './Components/nodisp/nodisp.component';

import { RecientesComponent } from './Components/recientes/recientes.component';

import { PerfilComponent } from './Components/perfil/perfil.component';
import { AcercaDeComponent } from './Components/MenuLateral/acerca-de/acerca-de.component';
import { ActualizarProComponent } from './Components/MenuLateral/actualizar-pro/actualizar-pro.component';
import { CanjearPuntosComponent } from './Components/MenuLateral/canjear-puntos/canjear-puntos.component';
import { ComentariosComponent } from './Components/MenuLateral/comentarios/comentarios.component';
import { EstadisticasComponent } from './Components/MenuLateral/estadisticas/estadisticas.component';
import { HorariosLugaresComponent } from './Components/MenuLateral/HorariosLugares/horarios-lugares/horarios-lugares.component';
  import { AddLugaresComponent } from './Components/MenuLateral/HorariosLugares/Agregar/add-lugares/add-lugares.component';
  import { AddHorariosComponent } from './Components/MenuLateral/HorariosLugares/Agregar/add-horarios/add-horarios.component';
  import { EditLugaresComponent } from './Components/MenuLateral/HorariosLugares/Editar/edit-lugares/edit-lugares.component';
  import { EditHorariosComponent } from './Components/MenuLateral/HorariosLugares/Editar/edit-horarios/edit-horarios.component';

import { PreferenciasComponent } from './Components/MenuLateral/Preferencias/preferencias/preferencias.component';
  import { AparienciaComponent } from './Components/MenuLateral/Preferencias/apariencia/apariencia.component';
  import { NotificacionesComponent } from './Components/MenuLateral/Preferencias/notificaciones/notificaciones.component';
import { WidgetsComponent } from './Components/MenuLateral/widgets/widgets.component';

import { ListRecComponent } from './Components/Listas/list-rec/list-rec.component';
import { ListIdeaComponent } from './Components/Listas/list-idea/list-idea.component';
import { ListAmComponent } from './Components/Listas/list-am/list-am.component';
import { ListNotaComponent } from './Components/Listas/list-nota/list-nota.component';

import { AddRecComponent } from './Components/Agregar/add-rec/add-rec.component';
import { AddIdeaComponent } from './Components/Agregar/add-idea/add-idea.component';
import { AddAmComponent } from './Components/Agregar/add-am/add-am.component';
import { AddNotaComponent } from './Components/Agregar/add-nota/add-nota.component';

import { EditRecComponent } from './Components/Editar/edit-rec/edit-rec.component';
import { EditIdeaComponent } from './Components/Editar/edit-idea/edit-idea.component';
import { EditAmComponent } from './Components/Editar/edit-am/edit-am.component';
import { EditNotaComponent } from './Components/Editar/edit-nota/edit-nota.component';

const routes: Routes = [
  
  { path: '', redirectTo: 'Recientes', pathMatch: 'full' },
  { path: 'Recientes',              component: RecientesComponent},

  /* ------ Componentes Menú Lateral ------ */
  { path: 'Perfil',                 component: PerfilComponent},

  { path: 'Actualizar_a_Pro',       component: ActualizarProComponent},
  { path: 'Horarios_y_Lugares',     component: HorariosLugaresComponent},
    { path: 'add/Lugar',            component: AddLugaresComponent},
    { path: 'add/Horario',          component: AddHorariosComponent},
    { path: 'edit/Lugar/:id',       component: EditLugaresComponent},
    { path: 'edit/Horario/:id',     component: EditHorariosComponent},

  { path: 'Estadisticas',           component: EstadisticasComponent },
  { path: 'Canjear_Puntos',         component: CanjearPuntosComponent },
  { path: 'Preferencias',           component: PreferenciasComponent },
    { path: 'Apariencia',           component: AparienciaComponent },
    { path: 'Notificaciones',       component: NotificacionesComponent },
  { path: 'Widgets',                component: WidgetsComponent },
  { path: 'Comentarios',            component: ComentariosComponent},
  { path: 'Acerca_de_Erineru',      component: AcercaDeComponent},

  /* ------Listas ------ */
  { path: 'list/Recordatorios',     component: ListRecComponent},
  { path: 'list/Ideas',             component: ListIdeaComponent},
  { path: 'list/Ayuda_Memoria',     component: ListAmComponent},
  { path: 'list/Notas_Rapidas',     component: ListNotaComponent},

  /* ------ Agregar ------ */
  { path: 'add/Recordatorio',       component: AddRecComponent},
  { path: 'add/Idea',               component: AddIdeaComponent},
  { path: 'add/Ayuda_Memoria',      component: AddAmComponent},
  { path: 'add/Nota_Rapida',        component: AddNotaComponent},

  /* ------ Editar ------ */
  { path: 'edit/Recordatorio/:id',  component: EditRecComponent},
  { path: 'edit/Idea/:id',          component: EditIdeaComponent},
  { path: 'edit/Ayuda_Memoria/:id', component: EditAmComponent},
  { path: 'edit/Nota_Rapida/:id',   component: EditNotaComponent},

  /* ------ Otros ------ */
  { path: 'No_Disponible',          component: NodispComponent},

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
